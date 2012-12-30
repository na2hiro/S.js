%lex
%%

\s+				/* skip */
[^\s\(\)\.]+	return "SYMBOL"
"("				return "("
")"				return ")"
"."				return "."
<<EOF>>			return "EOF"
.				return "INVALID"

/lex

%start s
%%
s
	: exp "EOF" {return $1};

exp
	: list
	| atom;

exps
	: {$$=new Nil()}/*empty*/
	| exp exps{$$=new Cons($1, $2);}
	| exp "." exp{$$=new Cons($1, $3);};

list
	: "(" exps ")" {$$ = $2};

atom
	: SYMBOL{$$=new Leaf($1);};
