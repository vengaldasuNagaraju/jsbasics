//by value primitives

var a=3;
var b;
b=a;
a=2;

console.log(a);  //2

console.log(b);   //3

//by references (all objects reference (including functions))

var c= {greeing:'hi'};
var d;

d=c;
c.greeting='hello'; //mutae
console.log(c);
console.log(d);


//by reference (even as parameters)

function changeGreeting(obj){
  obj.greeting = 'Hola';
}
changeGreeting(d);
console.log(c);
console.log(d);
// equals operator sets up new memory space(new address)
c={greeting:'howdy'};
console.log(c);
console.log(d);