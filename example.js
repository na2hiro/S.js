var S = require("./S");
var util = require("util");
function detail(str){return util.inspect(str, false, null);}

var obj = S.parse("(a (1 2 . (3)) () c ((()())))");
var list = obj.toList();
var cons = obj.toCons();
console.log("toList", detail(list));
console.log("toCons", detail(cons));
console.log("toListString", obj.toListString());
console.log("toConsString", obj.toConsString());
var s = S.fromCons(cons);
console.log("fromCons->toCons", detail(s.toCons()));
s = S.fromList(list);
console.log("fromList->toList", detail(s.toList()));
