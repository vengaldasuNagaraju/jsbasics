// by using the fillter keyword we get the result which filter function is satisfy 

const number =[1,-2,3,4,5];
const result = number.filter(function(value){
  return value>=0;
})
console.log(result);