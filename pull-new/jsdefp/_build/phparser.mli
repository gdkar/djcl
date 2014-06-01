exception Error

type token = 
  | YIELD
  | XOR_ASSIGN
  | WHILE
  | VARIABLE of (string)
  | VAR
  | USE
  | UNSET_CAST
  | UNSET
  | TRY
  | TRAIT
  | THROW
  | SWITCH
  | STRING_CAST
  | STRING of (string)
  | STRAIT
  | STATIC
  | SNAMESPACE
  | SMETHOD
  | SLINE
  | SFUNCTION
  | SFILE
  | SEQUAL
  | SEMI
  | SDIR
  | SCLASS
  | RSH_ASSIGN
  | RSH
  | RP
  | RETURN
  | REQUIRE_ONCE
  | REQUIRE
  | RC
  | RB
  | QM
  | PUBLIC
  | PROTECTED
  | PRIVATE
  | PRINT
  | PLUS_ASSIGN
  | PLUS
  | OR_ASSIGN
  | OBJECT_CAST
  | NSEQUAL
  | NEW
  | NEQUAL
  | NAMESPACE
  | MUL_ASSIGN
  | MUL
  | MOD_ASSIGN
  | MOD
  | MINUS_ASSIGN
  | MINUS
  | LXOR
  | LT
  | LSH_ASSIGN
  | LSH
  | LP
  | LOR
  | LNUMBER of (int)
  | LNOT
  | LIST
  | LE
  | LC
  | LB
  | LAND
  | LABEL of (string)
  | ISSET
  | INT_CAST
  | INTERFACE
  | INSTEADOF
  | INSTANCEOF
  | INLINE_HTML of (string)
  | INCR
  | INCLUDE_ONCE
  | INCLUDE
  | IMPLEMENTS
  | IF
  | HALT
  | GT
  | GOTO
  | GLOBAL
  | GE
  | FUNCTION
  | FOREACH
  | FOR
  | FLOAT_CAST
  | FINALLY
  | FINAL
  | EXTENDS
  | EXIT
  | EVAL
  | EQUAL
  | EOF
  | EMPTY
  | ELSEIF
  | ELSE
  | ECHO
  | DOT_ASSIGN
  | DOT
  | DOLLAR_CURLY
  | DOLLAR
  | DO
  | DNUMBER of (float)
  | DIV_ASSIGN
  | DIV
  | DEFAULT
  | DECR
  | DECLARE
  | DBLCOLON
  | DBLARROW
  | CONTINUE
  | CONSTANT_ENCAPSED_STRING
  | CONST
  | COMMA
  | COLON
  | CLONE
  | CLASS
  | CATCH
  | CASE
  | CALLABLE
  | BXOR
  | BREAK
  | BOR
  | BOOL_CAST
  | BNOT
  | BAND
  | BACKSL
  | AT
  | ASSIGN
  | AS
  | ARROW
  | ARRAY_CAST
  | ARRAY
  | AND_ASSIGN
  | ABSTRACT


val start: (Lexing.lexbuf -> token) -> Lexing.lexbuf -> (Phpast.t)