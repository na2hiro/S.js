var S = require("./S");
var util = require("util");
function detail(str){return util.inspect(str, false, null);}

var tree = S.parse("(a (1 2 . (3)) () c ((()())))");
var list = tree.toList();
var cons = tree.toCons();
console.log("toList", detail(list));
console.log("toCons", detail(cons));
console.log("toListString", tree.toListString());
console.log("toConsString", tree.toConsString());
var tree2 = S.fromCons(cons);
console.log("fromCons->toCons", detail(tree2.toCons()));
var tree3 = S.fromList(list);
console.log("fromList->toList", detail(tree3.toList()));
var tree4 = S.parse("(1 . 2)");
try{
	console.log(tree4.toList());
	console.log("(1 . 2) no error");
}catch(e){
	console.log("(1 . 2) error!");
}
