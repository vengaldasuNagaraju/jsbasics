//arguments are nothing but the elements which we are passing when we are calling the function 
// we pass the elements when we declara the function those elements are called parameters

// function add(a,b){
// let total=a+b;
// return total;
// }
// console.log(add(1,3));
// a, b are parameters 
// 1,2 are the arguments

function add(){
  let total=0;
  for(let value of arguments){
    total=total+value;
  }
  return total;
}

console.log(add(1,2,3,4,5,6,7,8));