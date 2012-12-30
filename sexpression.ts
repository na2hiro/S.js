export function fromCons(obj): Tree{
	if(obj==null) return new Nil();
	if(obj instanceof Array){
		if(obj.length==0) return new Nil();
		if(obj.length!=2) throw "array has illegal length "+obj.length;
		return new Cons(fromCons(obj[0]), fromCons(obj[1]));
	}
	return new Leaf(obj);
}
export function fromList(obj): Tree{
	if(obj==null) return new Nil();
	if(obj instanceof Array){
		if(obj.length==0) return new Nil();
		var head = obj.shift();
		return new Cons(fromList(head), obj.length==0 ? new Nil() : fromList(obj));
	}
	return new Leaf(obj);
}
export interface Tree{
	toCons(): any;
	toList(): any;
	toConsString(): any;
	toListString(left?: bool): any;
}
class Nil{
	constructor(){}
	toCons(){return [];}
	toList(){return [];}
	toConsString(){return "()"}
	toListString(left: bool = true){return left?"()":""}
}
class Leaf{
	constructor(public value: any){}
	toCons(){return this.value;}
	toList(){return this.value;}
	toConsString(){return this.value.toString()}
	toListString(left: bool = true){
		return this.value.toString();
	}
}
class Cons{
	constructor(public left: Tree, public right: Tree){}
	toCons(){return [this.left.toCons(), this.right.toCons()]}
	toList(){
		var left = this.left.toList();
		var right = this.right.toList();
		if(right==null){
			return [left];
		}
		if(right instanceof Array){
			right.unshift(left);
			return right;
		}
		throw "cant cast to list";
	}
	toConsString(){
		return "("+this.left.toConsString()+" . "+this.right.toConsString()+")";
	}
	toListString(left: bool = true){
		var body = this.left.toListString(true)+this.right.toListString(false);
		if(left){
			return "("+body+")";
		}else{
			return " "+body;
		}
	}
}
