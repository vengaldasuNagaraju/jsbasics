function greet(name){
  console.log('hello '+ name);
}

greet('john');

var greeting = function(name){
  console.log('hello' + name);
}
greeting('john')

//using the immediately invoked functionn expression (IIFE)

var greetfun =function(name){
  
  return 'hello' + name ;

}('nagaraju');

console.log(greetfun);

// This is the perfect IIFE

var firstname='naga';
(function(name){
  var great = 'Inside IIFE HELLO ';
  console.log(great +'' + name);
}(firstname));
