function max(a,b){
    return a>b?a:b;
}
max(2,3);



var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();


var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;
obj.sayHi();




function test() {
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");





var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);
console.trace("obj.x :",obj.x);


document.onclick = function () {/
    alert("click");
   
};