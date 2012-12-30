# S.js

## What's this
S-expression parser by JavaScript / [TypeScript][1] generated with [Jison][2]

## Dependencies
no dependencies

## Usage
Only S.js is necessary

### build `Tree`
these are same tree

    var S = require("./S");
    // from string
    var tree = S.parse("(a (1 2 . (3)) () c ((()())))");
    // from list array
    var tree2 = S.fromList([ 'a', [ '1', '2', '3' ], [], 'c', [ [ [], [] ] ] ]);
    // from cons array
    var tree3 = S.fromCons([ 'a', [ [ '1', [ '2', [ '3', [] ] ] ], [ [], [ 'c', [ [ [ [], [ [], [] ] ], [] ], [] ] ] ] ] ]);

### convert `Tree` into `list array/string`
Error is thrown if it's impossible to express without `cons`

    console.log(s.toList()); // [ 'a', [ '1', '2', '3' ], [], 'c', [ [ [], [] ] ] ]
	console.log(s.toListString()); // "(a (1 2 3) () c ((() ())))"
    S.parse("(1 . 2)").toList() // Error is thrown

### convert `Tree` into `cons array`
    console.log(s.toCons()); // [ 'a', [ [ '1', [ '2', [ '3', [] ] ] ], [ [], [ 'c', [ [ [ [], [ [], [] ] ], [] ], [] ] ] ] ] ]
	console.log(s.toConsString()); // "(a . ((1 . (2 . (3 . ()))) . (() . (c . (((() . (() . ())) . ()) . ())))))"


## Example
see example.js

## For developing
### dependencies
* [TypeScript][1]: `npm install typescript`
* [Jison][2]: `npm install jison -g`

### files
* parser.jison
    * Parse tree is here
    * `jison parser.jison` to generate `parser.js`
* sexpression.ts
    * Tree and related objects are here
    * `tsc sexpression.ts` to generate `sexpression.js`
* compile.sh
    * generate `parser.js` and `sexpression.js`, concatenate them and generate `S.js`

[1]: http://typescriptlang.org
[2]: http://zaach.github.com/jison
