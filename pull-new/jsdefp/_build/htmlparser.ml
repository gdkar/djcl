exception Error

type token = 
  | TAG_SLASH_OPEN
  | TAG_OPEN
  | TAG_CLOSE
  | STRING of (string)
  | SLASH
  | EQUAL
  | EOF
  | DOCTYPE

and _menhir_env = {
  _menhir_lexer: Lexing.lexbuf -> token;
  _menhir_lexbuf: Lexing.lexbuf;
  mutable _menhir_token: token;
  mutable _menhir_startp: Lexing.position;
  mutable _menhir_endp: Lexing.position;
  mutable _menhir_shifted: int
}

and _menhir_state = 
  | MenhirState17
  | MenhirState15
  | MenhirState13
  | MenhirState11
  | MenhirState8
  | MenhirState1

  

(** Converted from zend_language_parser.y for PHP 5.4 **)

let _eRR =
  Error

let rec _menhir_goto_list_tag_ : _menhir_env -> 'ttv_tail -> _menhir_state -> (Htmlast.t) -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _v ->
    let _menhir_stack = (_menhir_stack, _menhir_s, _v) in
    match _menhir_s with
    | MenhirState17 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _menhir_stack = Obj.magic _menhir_stack in
        let ((_menhir_stack, _menhir_s, x), _, xs) = _menhir_stack in
        let _v : (Htmlast.t) =     ( x :: xs ) in
        _menhir_goto_list_tag_ _menhir_env _menhir_stack _menhir_s _v
    | MenhirState15 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        let _tok = _menhir_env._menhir_token in
        (match _tok with
        | TAG_SLASH_OPEN ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _tok = _menhir_discard _menhir_env in
            (match _tok with
            | STRING _v ->
                let _menhir_stack = Obj.magic _menhir_stack in
                let _startpos = _menhir_env._menhir_startp in
                let _endpos = _menhir_env._menhir_endp in
                let _menhir_stack = (_menhir_stack, _v, _startpos, _endpos) in
                let _tok = _menhir_discard _menhir_env in
                (match _tok with
                | TAG_CLOSE ->
                    let _menhir_stack = Obj.magic _menhir_stack in
                    let _endpos = _menhir_env._menhir_endp in
                    let _ = _menhir_discard _menhir_env in
                    let _menhir_stack = Obj.magic _menhir_stack in
                    let _endpos__8_ = _endpos in
                    let ((((((_menhir_stack, _menhir_s, _startpos__1_), t, _startpos_t_, _endpos_t_), _, a), _endpos__4_), _, l), q, _startpos_q_, _endpos_q_) = _menhir_stack in
                    let _startpos = _startpos__1_ in
                    let _endpos = _endpos__8_ in
                    let _v : (Htmlast.node_t) =    ((`Tag((if t=q then String.lowercase t else failwith "Invalid HTML"), a, l),(_startpos,_endpos))) in
                    _menhir_goto_tag _menhir_env _menhir_stack _menhir_s _v
                | _ ->
                    assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
                    _menhir_env._menhir_shifted <- (-1);
                    let _menhir_stack = Obj.magic _menhir_stack in
                    let ((_menhir_stack, _menhir_s, _), _, _, _) = _menhir_stack in
                    _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
            | _ ->
                assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
                _menhir_env._menhir_shifted <- (-1);
                let _menhir_stack = Obj.magic _menhir_stack in
                let (_menhir_stack, _menhir_s, _) = _menhir_stack in
                _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            let _menhir_stack = Obj.magic _menhir_stack in
            let (_menhir_stack, _menhir_s, _) = _menhir_stack in
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
    | MenhirState11 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        let _tok = _menhir_env._menhir_token in
        (match _tok with
        | EOF ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _menhir_stack = Obj.magic _menhir_stack in
            let ((_menhir_stack, _), _, l) = _menhir_stack in
            let _v : (Htmlast.t) =                            (l) in
            let _menhir_stack = Obj.magic _menhir_stack in
            let _menhir_stack = Obj.magic _menhir_stack in
            let _1 = _v in
            Obj.magic _1
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            let _menhir_stack = Obj.magic _menhir_stack in
            let (_menhir_stack, _menhir_s, _) = _menhir_stack in
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
    | _ ->
        _menhir_fail ()

and _menhir_fail : unit -> 'a =
  fun () ->
    Printf.fprintf Pervasives.stderr "Internal failure -- please contact the parser generator's developers.\n%!";
    assert false

and _menhir_goto_tag : _menhir_env -> 'ttv_tail -> _menhir_state -> (Htmlast.node_t) -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _v ->
    let _menhir_stack = (_menhir_stack, _menhir_s, _v) in
    let _menhir_stack = Obj.magic _menhir_stack in
    assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
    let _tok = _menhir_env._menhir_token in
    match _tok with
    | STRING _v ->
        _menhir_run16 _menhir_env (Obj.magic _menhir_stack) MenhirState17 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
    | TAG_OPEN ->
        _menhir_run12 _menhir_env (Obj.magic _menhir_stack) MenhirState17 _menhir_env._menhir_startp
    | EOF | TAG_SLASH_OPEN ->
        _menhir_reduce7 _menhir_env (Obj.magic _menhir_stack) MenhirState17
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState17

and _menhir_reduce7 : _menhir_env -> 'ttv_tail -> _menhir_state -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s ->
    let _v : (Htmlast.t) =     ( [] ) in
    _menhir_goto_list_tag_ _menhir_env _menhir_stack _menhir_s _v

and _menhir_run12 : _menhir_env -> 'ttv_tail -> _menhir_state -> Lexing.position -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _startpos ->
    let _menhir_stack = (_menhir_stack, _menhir_s, _startpos) in
    let _tok = _menhir_discard _menhir_env in
    match _tok with
    | STRING _v ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _startpos = _menhir_env._menhir_startp in
        let _endpos = _menhir_env._menhir_endp in
        let _menhir_stack = (_menhir_stack, _v, _startpos, _endpos) in
        let _tok = _menhir_discard _menhir_env in
        (match _tok with
        | STRING _v ->
            _menhir_run2 _menhir_env (Obj.magic _menhir_stack) MenhirState13 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
        | SLASH | TAG_CLOSE ->
            _menhir_reduce5 _menhir_env (Obj.magic _menhir_stack) MenhirState13
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState13)
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        let _menhir_stack = Obj.magic _menhir_stack in
        let (_menhir_stack, _menhir_s, _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s

and _menhir_run16 : _menhir_env -> 'ttv_tail -> _menhir_state -> (string) -> Lexing.position -> Lexing.position -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _v _startpos _endpos ->
    let _ = _menhir_discard _menhir_env in
    let _menhir_stack = Obj.magic _menhir_stack in
    let t = _v in
    let _startpos_t_ = _startpos in
    let _endpos_t_ = _endpos in
    let _startpos = _startpos_t_ in
    let _endpos = _endpos_t_ in
    let _v : (Htmlast.node_t) =            ((`Text(t),(_startpos,_endpos))) in
    _menhir_goto_tag _menhir_env _menhir_stack _menhir_s _v

and _menhir_goto_list_attribute_ : _menhir_env -> 'ttv_tail -> _menhir_state -> (Htmlast.attr_t list) -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _v ->
    let _menhir_stack = (_menhir_stack, _menhir_s, _v) in
    match _menhir_s with
    | MenhirState1 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        let _tok = _menhir_env._menhir_token in
        (match _tok with
        | TAG_CLOSE ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _endpos = _menhir_env._menhir_endp in
            let _ = _menhir_discard _menhir_env in
            let _menhir_stack = Obj.magic _menhir_stack in
            let _endpos__3_ = _endpos in
            let (_menhir_stack, _, l) = _menhir_stack in
            let _v : (unit) =                                       () in
            let _menhir_stack = Obj.magic _menhir_stack in
            let _menhir_stack = Obj.magic _menhir_stack in
            let x = _v in
            let _v : (unit option) =     ( Some x ) in
            _menhir_goto_option_doctype_ _menhir_env _menhir_stack _v
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            let _menhir_stack = Obj.magic _menhir_stack in
            let (_menhir_stack, _menhir_s, _) = _menhir_stack in
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
    | MenhirState8 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _menhir_stack = Obj.magic _menhir_stack in
        let ((_menhir_stack, _menhir_s, x), _, xs) = _menhir_stack in
        let _v : (Htmlast.attr_t list) =     ( x :: xs ) in
        _menhir_goto_list_attribute_ _menhir_env _menhir_stack _menhir_s _v
    | MenhirState13 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        let _tok = _menhir_env._menhir_token in
        (match _tok with
        | SLASH ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _tok = _menhir_discard _menhir_env in
            (match _tok with
            | TAG_CLOSE ->
                let _menhir_stack = Obj.magic _menhir_stack in
                let _endpos = _menhir_env._menhir_endp in
                let _ = _menhir_discard _menhir_env in
                let _menhir_stack = Obj.magic _menhir_stack in
                let _endpos__5_ = _endpos in
                let (((_menhir_stack, _menhir_s, _startpos__1_), t, _startpos_t_, _endpos_t_), _, a) = _menhir_stack in
                let _startpos = _startpos__1_ in
                let _endpos = _endpos__5_ in
                let _v : (Htmlast.node_t) =                                                       ((`Tag(t, a, []),(_startpos,_endpos))) in
                _menhir_goto_tag _menhir_env _menhir_stack _menhir_s _v
            | _ ->
                assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
                _menhir_env._menhir_shifted <- (-1);
                let _menhir_stack = Obj.magic _menhir_stack in
                let (_menhir_stack, _menhir_s, _) = _menhir_stack in
                _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
        | TAG_CLOSE ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _endpos = _menhir_env._menhir_endp in
            let _menhir_stack = (_menhir_stack, _endpos) in
            let _tok = _menhir_discard _menhir_env in
            (match _tok with
            | STRING _v ->
                _menhir_run16 _menhir_env (Obj.magic _menhir_stack) MenhirState15 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
            | TAG_OPEN ->
                _menhir_run12 _menhir_env (Obj.magic _menhir_stack) MenhirState15 _menhir_env._menhir_startp
            | TAG_SLASH_OPEN ->
                _menhir_reduce7 _menhir_env (Obj.magic _menhir_stack) MenhirState15
            | _ ->
                assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
                _menhir_env._menhir_shifted <- (-1);
                _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState15)
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            let _menhir_stack = Obj.magic _menhir_stack in
            let (_menhir_stack, _menhir_s, _) = _menhir_stack in
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s)
    | _ ->
        _menhir_fail ()

and _menhir_goto_attval : _menhir_env -> 'ttv_tail -> (string) -> Lexing.position -> 'ttv_return =
  fun _menhir_env _menhir_stack _v _endpos ->
    let _menhir_stack = Obj.magic _menhir_stack in
    let _menhir_stack = Obj.magic _menhir_stack in
    let v = _v in
    let _endpos_v_ = _endpos in
    let (_menhir_stack, _menhir_s, n, _startpos_n_, _endpos_n_) = _menhir_stack in
    let _startpos = _startpos_n_ in
    let _endpos = _endpos_v_ in
    let _v : (Htmlast.attr_t) =                     (((n,v),(_startpos,_endpos))) in
    let _menhir_stack = (_menhir_stack, _menhir_s, _v) in
    let _menhir_stack = Obj.magic _menhir_stack in
    assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
    let _tok = _menhir_env._menhir_token in
    match _tok with
    | STRING _v ->
        _menhir_run2 _menhir_env (Obj.magic _menhir_stack) MenhirState8 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
    | SLASH | TAG_CLOSE ->
        _menhir_reduce5 _menhir_env (Obj.magic _menhir_stack) MenhirState8
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState8

and _menhir_goto_option_doctype_ : _menhir_env -> 'ttv_tail -> (unit option) -> 'ttv_return =
  fun _menhir_env _menhir_stack _v ->
    let _menhir_stack = (_menhir_stack, _v) in
    let _menhir_stack = Obj.magic _menhir_stack in
    assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
    let _tok = _menhir_env._menhir_token in
    match _tok with
    | STRING _v ->
        _menhir_run16 _menhir_env (Obj.magic _menhir_stack) MenhirState11 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
    | TAG_OPEN ->
        _menhir_run12 _menhir_env (Obj.magic _menhir_stack) MenhirState11 _menhir_env._menhir_startp
    | EOF ->
        _menhir_reduce7 _menhir_env (Obj.magic _menhir_stack) MenhirState11
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState11

and _menhir_errorcase : _menhir_env -> 'ttv_tail -> _menhir_state -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s ->
    match _menhir_s with
    | MenhirState17 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let (_menhir_stack, _menhir_s, _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s
    | MenhirState15 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let ((_menhir_stack, _menhir_s, _), _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s
    | MenhirState13 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let ((_menhir_stack, _menhir_s, _), _, _, _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s
    | MenhirState11 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        raise _eRR
    | MenhirState8 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let (_menhir_stack, _menhir_s, _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s
    | MenhirState1 ->
        let _menhir_stack = Obj.magic _menhir_stack in
        raise _eRR

and _menhir_reduce5 : _menhir_env -> 'ttv_tail -> _menhir_state -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s ->
    let _v : (Htmlast.attr_t list) =     ( [] ) in
    _menhir_goto_list_attribute_ _menhir_env _menhir_stack _menhir_s _v

and _menhir_run2 : _menhir_env -> 'ttv_tail -> _menhir_state -> (string) -> Lexing.position -> Lexing.position -> 'ttv_return =
  fun _menhir_env _menhir_stack _menhir_s _v _startpos _endpos ->
    let _menhir_stack = (_menhir_stack, _menhir_s, _v, _startpos, _endpos) in
    let _tok = _menhir_discard _menhir_env in
    match _tok with
    | EQUAL ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _tok = _menhir_discard _menhir_env in
        (match _tok with
        | STRING _v ->
            let _menhir_stack = Obj.magic _menhir_stack in
            let _startpos = _menhir_env._menhir_startp in
            let _endpos = _menhir_env._menhir_endp in
            let _ = _menhir_discard _menhir_env in
            let _menhir_stack = Obj.magic _menhir_stack in
            let s = _v in
            let _startpos_s_ = _startpos in
            let _endpos_s_ = _endpos in
            let _endpos = _endpos_s_ in
            let _v : (string) =                  (s) in
            _menhir_goto_attval _menhir_env _menhir_stack _v _endpos
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            let _menhir_stack = Obj.magic _menhir_stack in
            raise _eRR)
    | SLASH | STRING _ | TAG_CLOSE ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _endpos = _menhir_env._menhir_startp in
        let _v : (string) =   ("") in
        _menhir_goto_attval _menhir_env _menhir_stack _v _endpos
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        let _menhir_stack = Obj.magic _menhir_stack in
        let (_menhir_stack, _menhir_s, _, _, _) = _menhir_stack in
        _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) _menhir_s

and _menhir_discard : _menhir_env -> token =
  fun _menhir_env ->
    let lexbuf = _menhir_env._menhir_lexbuf in
    let _tok = _menhir_env._menhir_lexer lexbuf in
    _menhir_env._menhir_token <- _tok;
    _menhir_env._menhir_startp <- lexbuf.Lexing.lex_start_p;
    _menhir_env._menhir_endp <- lexbuf.Lexing.lex_curr_p;
    let shifted = Pervasives.(+) _menhir_env._menhir_shifted 1 in
    if Pervasives.(>=) shifted 0 then
      _menhir_env._menhir_shifted <- shifted;
    _tok

and start : (Lexing.lexbuf -> token) -> Lexing.lexbuf -> (Htmlast.t) =
  fun lexer lexbuf ->
    let _menhir_env = let _tok = lexer lexbuf in
    {
      _menhir_lexer = lexer;
      _menhir_lexbuf = lexbuf;
      _menhir_token = _tok;
      _menhir_startp = lexbuf.Lexing.lex_start_p;
      _menhir_endp = lexbuf.Lexing.lex_curr_p;
      _menhir_shifted = max_int;
      } in
    Obj.magic (let _menhir_stack = () in
    assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
    let _tok = _menhir_env._menhir_token in
    match _tok with
    | DOCTYPE ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _tok = _menhir_discard _menhir_env in
        (match _tok with
        | STRING _v ->
            _menhir_run2 _menhir_env (Obj.magic _menhir_stack) MenhirState1 _v _menhir_env._menhir_startp _menhir_env._menhir_endp
        | TAG_CLOSE ->
            _menhir_reduce5 _menhir_env (Obj.magic _menhir_stack) MenhirState1
        | _ ->
            assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
            _menhir_env._menhir_shifted <- (-1);
            _menhir_errorcase _menhir_env (Obj.magic _menhir_stack) MenhirState1)
    | EOF | STRING _ | TAG_OPEN ->
        let _menhir_stack = Obj.magic _menhir_stack in
        let _v : (unit option) =     ( None ) in
        _menhir_goto_option_doctype_ _menhir_env _menhir_stack _v
    | _ ->
        assert (Pervasives.(<>) _menhir_env._menhir_shifted (-1));
        _menhir_env._menhir_shifted <- (-1);
        let _menhir_stack = Obj.magic _menhir_stack in
        raise _eRR)



