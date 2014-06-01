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


val start: (Lexing.lexbuf -> token) -> Lexing.lexbuf -> (Htmlast.t)