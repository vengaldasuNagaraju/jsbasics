
const numbers =[1,2,3];

//using he for of loop 
for(let number of numbers){
  console.log(number);
}


//by using the foreach loop  
// numbers.forEach(function(value ){
//   console.log(value);
// })
//using the arrow function 
numbers.forEach(( value ,index ) => console.log(value , index));
