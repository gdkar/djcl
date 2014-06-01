exception Error

type token = 
  | XOR_ASSIGN
  | XOR
  | WITH
  | WHILE
  | VOID
  | VAR
  | TYPEOF
  | TRY
  | TIMES_ASSIGN
  | TIMES
  | THROW
  | THIS
  | SWITCH
  | STRING of (string)
  | SNEQ
  | SEQ
  | SEMI
  | RSH_ASSIGN
  | RSH
  | RP
  | RETURN
  | RESERVED of (string)
  | REGEXP of (string*string)
  | RC
  | RB
  | QM
  | PLUS_ASSIGN
  | PLUS
  | OR_ASSIGN
  | NUMBER of (float)
  | NULL
  | NEW
  | NEQ
  | MOD_ASSIGN
  | MOD
  | MINUS_ASSIGN
  | MINUS
  | LT
  | LSH_ASSIGN
  | LSH
  | LP
  | LOR
  | LNOT
  | LE
  | LC
  | LB
  | LAND
  | KEYWORD of (string)
  | INSTANCEOF
  | INCR
  | IN
  | IF
  | IDENTIFIER of (string)
  | GT
  | GE
  | FUNCTION
  | FOR
  | FINALLY
  | EQ
  | EOL
  | EOF
  | ELSE
  | DOT
  | DO
  | DIV_ASSIGN
  | DIV
  | DELETE
  | DEFAULT
  | DECR
  | DEBUGGER
  | CONTINUE
  | COMMA
  | COLON
  | CATCH
  | CASE
  | BREAK
  | BOR
  | BOOL of (bool)
  | BNOT
  | BAND
  | ASSIGN
  | ARSH_ASSIGN
  | ARSH
  | AND_ASSIGN


val main: (Lexing.lexbuf -> token) -> Lexing.lexbuf -> (Ast.t)