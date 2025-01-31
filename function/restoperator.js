//while passing the parameter rest parameter is the last parameter


// function sum(...args){
//   return args.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4)); 

function sum(discount , ...prices){
  const total = prices.reduce((a,b)=> a+b);
  return total * (1 - discount);
}

console.log(sum(0.5,20,30));