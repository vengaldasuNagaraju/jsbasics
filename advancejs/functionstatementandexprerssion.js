greet()
function greet()
{
  console.log('hi');
}

//for variable it will get the undefined hoisting is not possible  we get the error is undefined is not a function. 


let anonymousgreet =function(){
  console.log('hello');
}
anonymousgreet()
function log(a){
  a();
}
log(function(){
  console.log('hi');
})