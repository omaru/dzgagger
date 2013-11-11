var Util ={
	is9gag:function(toEval){
	  var url = new RegExp("^(http:|https:)//.*9gag*");
       return url.test(toEval);
	}
};