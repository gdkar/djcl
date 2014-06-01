open Ast
open Printf
open Globals
open Error
open Typecheck

let number_c = ref []
let string_c = ref ["",("string_empty",true);"{",("curly_open",true); "}",("curly_close",true);":",("colon",true);",",("comma",true)]
let spec_c = ref ""


type continuation = {pad:int; mem: string; ret: string}
let uk ?pad:(p=None) ?mem:(m=None) ?ret:(r=None) k =
  {pad = (match p with None->k.pad | Some i->i);
   mem = (match m with None->k.mem | Some l->l);
   ret = (match r with None->k.ret | Some r->r)}
let init_k = {pad=0; mem=""; ret=""}

let typeof loc = head (Hashtbl.find type_table loc)

let cache_fresh prefix = let c = ref 0 in
  fun l v ->  try fst (List.assoc v !l)
	with Not_found -> incr c; let t = sprintf "%s%d" prefix !c
	  in l := (v,(t,false))::!l; t 

let number_lit = let f = cache_fresh "num_" number_c in fun x -> f x
let string_lit = let f = cache_fresh "str_" string_c in fun x -> f x

let mkctr prefix = let c = ref 0 in fun () -> incr c; sprintf "%s_%d" prefix !c
let malloc = mkctr "mem"
let new_val = mkctr "val"
let new_fun = mkctr "fun"
let new_arr = mkctr "arr"
let new_obj = mkctr "obj"
let new_ret = mkctr "ret"
let pad = (fun n->String.make (!pad_len*n) ' ')

let concat l = List.fold_left (^) "" l
let rec implode c = function
	| [] -> "" | [x] -> x | h::t -> h^c^(implode c t)  

let num_op = function
  | `Mod(_) -> "modulo" | `Divide(_) -> "divide" | `Multiply(_) -> "multiply"
  | `Sub(_) -> "substract" | `Lsh(_) -> "left_shift" | `Rsh(_) -> "right_shift"
  | `Ash(_) -> "a_right_shift" | `Lt(_) -> "lt_number" | `Gt(_) -> "gt_number"
  | `Le(_) -> "leq_number" | `Ge(_) -> "geq_number" | `Band(_) -> "bit_and"
  | `Bxor(_) -> "bit_xor" | `Bor(_) -> "bit_or" | _ -> "error"

let t2s t = match head t with
  | Number -> "number" | String -> "string" | Boolean -> "boolean"
  | Object(_) -> "object" | Array(_) -> "array" | Arrow(_) -> "function" | _ -> "undefined" 

let t2S t = String.capitalize (t2s t)

let rec pv_prog k (program:Ast.t) = 
  let print acc = function
    | (`Statement(s),loc) -> acc^(pv_statement k s)
    | (`FunctionDeclaration(f),loc) -> acc^"(* Named function *)\n"
  in List.fold_left print "" program

and pv_statement k ((p,loc):statement_t) =
  let f = function
  | `Empty -> ""
  | `Expression(e) -> fst (pv_exp k e)

  | `Block(l) -> pv_statements k l
  | `If(c, t, f) -> let (s,r) = pv_exp k c in 
     let cd = new_ret () in
     let dn = new_ret () in
     s^"new "^cd^":channel;\nnew "^dn^":channel;\n"^
     "(in("^cd^",=bool_true());\n"^(pv_statement k t)^"out("^dn^",()))\n|\n"^
     (match f with None -> "" | Some s -> "(in("^cd^",=bool_false());\n"^(pv_statement k s)^"out("^dn^",()))\n|\n")^
     ("out("^cd^","^r^");\nin("^dn^",());\n")
  | `Return(e) -> let u = match e with None->("","()") | Some e->pv_exp k e in
    (fst u)^"out("^(k.ret)^","^(snd u)^");\n"
  | `Declaration(l) -> List.fold_left (
    fun b (i,v) -> if i.[0] = '_' && String.length i > 1 then b else let t = "var_"^i in b^"new "^t^":Memloc;\n"
    ^(match v with None -> ""
      | Some v -> let (se, r) = pv_exp k v and ty = typeof (snd v)
      in sprintf "%sinsert heap(%s,mem_%s(%s));\n" se t (t2s ty) r)
    ) "" l
  | _ -> syn_error loc "unsupported statement"
  in (pad k.pad)^(f p)

and pv_statements k l = List.fold_left (fun a b->a^(pv_statement k b)) "" l

and pv_exp k expr =
 let ct (u,e) (v,f) c = (u^v, sprintf "%s(%s,%s)" c e f) in

 let rec pvlhs (input, loc) =
  match input with
  | `Identifier(i) -> ("","var_"^i)
  | `Dot(e, s) -> let (c,l) = pve e and s = string_lit s and m = malloc () in
    (sprintf "%sget properties(=%s, =%s, %s) in\n" c l s m, m)
  | `Property(e, f) -> let (c,n) = pve f and (d,a) = pve e and m = malloc () in
    (sprintf "%s%sget elements(=%s, =%s, %s) in\n" c d a n m, m)
  | _ -> syn_error loc "unsupported lhs expression"

 and pve (input, loc) = match input with
  | `Number(n) -> ("", number_lit n)
  | `Bool(b) -> ("", if b then "bool_true()" else "bool_false()")
  | `String(s) -> ("", string_lit s)

  | `Object(l) -> let o = new_obj() and (l, _) = List.split l in
    let l = List.map (function `Property(i,v)->(i,v) | _ -> failwith "getter") l in
    let l = List.sort (fun (a,_) (b,_) -> compare a b) l in
    let l = List.map (fun (i,e)->let (p,v)=pve e and m = malloc () in
      sprintf "%snew %s:Memloc;\ninsert heap(%s,mem_%s(%s));\ninsert properties(%s,%s,%s);\n"
        p m m (t2s (typeof (snd e))) v o (string_lit i) m) l in
    let s = concat l in (sprintf "new %s:Object;\n%s" o s, o)

  | `Array(l) -> let a = new_arr () and t = typeof loc in
    let ts = match t with Array(t,_,_) -> t2s t | _ -> "undefined" in
    let cur = let i = ref (-1.) in fun ()->i:=!i+.1.; number_lit !i in
    let se = List.map (fun e->let (p,v)=pve e and m = malloc () in
      sprintf "%snew %s:Memloc;\ninsert heap(%s,mem_%s(%s));\ninsert elements(%s,%s,%s);\n"
        p m m ts v a (cur()) m) l in
    let s = concat se in (sprintf "new %s:Array;\n%s" a s, a)

  | `Dot(e, "length") when typeof (snd e) = String -> let (p,v)=pve e in (p,"length("^v^")")

  | `Identifier(_) | `Dot(_) | `Property(_) ->
    let (s,u) = pvlhs (input,loc) and v = new_val () and t = t2s (typeof loc)
    in (sprintf "%sget heap(=%s, mem_%s(%s)) in\n" s u t v, v)

  | `Call((`Dot((`Identifier("_lib"),_),"publish"), _),l) -> 
    let v = List.map pve l in let (se, c) = List.split v in 
    let s = concat se in (s^"out(pub,("^(implode "," c)^"));\n","()")

  | `Call((`Dot((`Identifier("_lib"),_),"event"), _),[
     (`Call((`Dot((`Identifier("_lib"),_),es), _),l),_)]) -> 
    let v = List.map pve l in let (se, c) = List.split v in 
    let s = concat se in (s^"event "^es^"("^(implode "," c)^");\n","()")

  | `Call((`Dot((`Identifier("_lib"),_),"spec"), _),[`String(s),_]) -> 
    spec_c := (!spec_c)^"\n"^s^"."; ("","()")

  | `Call((`Dot((`Identifier("_lib"),_),"DJSON_parse"), _),e::ot::_) ->
		let (s,u) = pve e and ((str, o), pc) = serialize ot in
    (sprintf "%slet %s=%s in\nnew %s:Object;\n%s" s str u o pc, o)

  | `Call((`Dot((`Identifier("_lib"),_),f), _),l) -> 
    let v = List.map pve l in let (se, c) = List.split v in 
    let s = concat se in (s,f^"("^(implode "," c)^")")

  | `Call(e, l) -> let u = pve e and v = List.map pve l and ret = new_ret () in
    let fn = new_fun() and rs = new_ret() in
	  let (se, c) = List.split (u::v) in let s = concat se in
		(s^"let function("^fn^")="^(snd u)^" in\nnew "^ret^":channel;\n"
		^"out("^fn^", ("^(implode "," (ret::(List.tl c)))^"));\n"
		^"in("^ret^", "^rs^":"^(t2S (typeof loc))^");\n", rs)

  | `Plus(e) -> let u = pve e in (fst u, sprintf "str_to_num(%s)" (snd u))
  | `Minus(e) -> let u = pve e in (fst u, sprintf "neg(%s)" (snd u))

  | `Lnot(e) -> let u = pve e in
    let op = match typeof (snd e) with
    | Number -> sprintf "is_nonzero(%s)" (snd u)
    | String -> sprintf "is_nonempty(%s)" (snd u)
		| Boolean -> snd u
		| Undefined -> "bool_false()"
		| _ -> "bool_true()"
    in (fst u, sprintf "negate(%s)" op)
  | `Bnot(e) -> let u = pve e in (fst u, sprintf "bitneg(%s)" (snd u))

  | `Add((`String(""),_),e) -> let (p,v) = pve e in (p, sprintf "num_to_str(%s)" v)
  | `Add(e,f) -> let op = 
    match (typeof (snd e), typeof (snd f)) with
    | (Number, Number) -> "add"
    | (Number, String) -> "num_left_concat"
    | (String, Number) -> "num_right_concat"
    | _ -> "concat"
    in ct (pve e) (pve f) op

  | `Sub(e,f) | `Multiply(e,f) | `Mod(e,f) | `Divide(e,f)
  | `Lsh(e,f) | `Rsh(e,f) | `Ash(e,f)  | `Bor(e,f) | `Band(e,f) | `Bxor(e,f)
  | `Lt(e,f) | `Gt(e,f) | `Le(e,f) | `Ge(e,f) -> let op = num_op input
    in ct (pve e) (pve f) op

  | `Sequal(e,f) | `Equal(e,f) -> let u = pve e and v = pve f in
    let t1 = t2s (typeof (snd e)) and t2 = t2s (typeof (snd f)) in
		let u = (fst u, sprintf "mem_%s(%s)" t1 (snd u)) and v = (fst v, sprintf "mem_%s(%s)" t2 (snd v))
    in ct u v "equal"

  | `Typeof (e) -> let (s,c) = pve e in
      (s,string_lit (t2s(typeof(snd(e)))))
  | `Conditional(c,e,f) -> let (pu,eu) = pve e and (pv,ev) = pve f and (pw,ew) = pve c in
    let v = new_val() in
    (pw^pu^pv^(sprintf "let %s=(if %s=bool_true() then %s else %s) in\n" v ew eu ev), v)

  | `Assign(e,f) -> let (s,u) = pvlhs e and (t,v) = pve f and ty = typeof (snd f) in
    (sprintf "%s%sinsert heap(%s, mem_%s(%s));\n" t s u (t2s ty) v, v)

  | `Function((None, ["s"], ([(`Statement(`If((`Equal((`Typeof((`Identifier("s"),_)),_),(`String("string"),_)),_),((`Return(Some (`Call((`Identifier("_"),_),[(`Identifier("s"),_)]),_)),_) as ret),None),_),_)]))) -> 
     let fc = new_fun() and rc = new_ret() in
    (sprintf "new %s:channel;\n(!in(%s, (%s:channel, arg_s:Memval));\nlet mem_string(s)=arg_s in\n(new var_s:Memloc;\ninsert heap(var_s,arg_s);\n%s0)\nelse\nout(%s, undefined()))|\n"
       fc fc rc (pv_statement (uk ~ret:(Some rc) k) ret) rc, sprintf "function(%s)" fc)

  | `Function(f) -> let (s,u) = pv_function k loc f in (s, sprintf "function(%s)" u)
  | _ -> syn_error loc "unsupported expression"
 in pve expr

and pv_function k loc ((n,args,b):function_t) =
  let f_chan = new_fun () and ret = new_ret () in
  let (at,rt) = match typeof loc with Arrow(a,_,r,_) -> (a,r) | _ -> failwith "Argument error" in
  let at = "channel" :: (List.map t2S at) in
  let at = List.combine (ret::(List.map (fun s->"arg_"^s) args)) at in
  let arg_t a = let t = List.assoc a at in sprintf "mem_%s(%s)" (String.uncapitalize t) a in 
  let argbind a = "new var_"^a^":Memloc;\ninsert heap(var_"^a^","^(arg_t ("arg_"^a))^");" in  
  ("new "^f_chan^":channel;\n"
    ^"(!in("^f_chan^", ("^(implode "," (List.map (fun (n,t)->n^":"^t) at))^"));\n"
    ^(implode "\n" (List.map argbind args))^"\n"
    ^(pv_prog (uk ~ret:(Some ret) k) b)
    ^(if rt=Undefined then "out("^ret^", undefined());\n" else "")
    ^"0)|",
   f_chan)

and serialize e =
 let pc = ref "" in let app s = pc := !pc ^ s in
 let rec sz (expr,loc) =
  match expr with
  | `Number(n) -> let v = new_val () in (sprintf "num_to_str(%s)" v, v)
  | `Bool(b) -> let v = new_val () in (sprintf "bool_to_str(%s)" v, v)
  | `String(s) -> let v = new_val () in (sprintf "escape(%s)" v, v)
  | `Object(l) -> let oo = new_obj() and (l, _) = List.split l in
    let l = List.map (function `Property(x) -> x | _ -> failwith "getter") l in
    let l = List.sort (fun (a,_) (b,_) -> compare a b) l in
    let (str,p) = List.fold_left (fun (str,add) (i,e) -> let (s,v) = sz e and m = malloc() in
      let ts = sprintf "concat(concat(escape(=%s), =colon), %s)" (string_lit i) s in
      let ms = sprintf "new %s:Memloc;\ninsert heap(%s, mem_%s(%s));\n" m m (t2s (typeof (snd e))) v in
      ((if str="" then sprintf "concat(=curly_open, %s)" ts
         else sprintf "concat(%s, concat(=comma, %s))" str ts),
       sprintf "%s%sinsert properties(%s, %s, %s);\n"
       add ms oo (string_lit i) m)) ("","") l in
    app p; (sprintf "concat(%s, =curly_close)" str, oo)
  | _ -> failwith "Invalid object schema in DJSON.parse"
 in (sz e, !pc)

let pv p =
  let free = concat (List.map (fun (n,t)->"free var_"^n^":Memloc.\n")
    (List.rev !free_env)) in
	let cst t l = concat (List.map (fun (v,(x,c))->if c then "" else "free "^x^":"^t^".\n") (List.rev l)) in
	free^(cst "Number" !number_c)^(cst "String" !string_c)^(!spec_c)
	^"\nprocess\n("^(pv_prog init_k p)^"0) | attackerHeap()\n"

