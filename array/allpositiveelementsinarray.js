
const numbers=[1,-9,2,3];

//here we are checking the every element which exist inside the array is positive returns true if it is not exist then it return false 

const allpositive = numbers.every(function(value)
{
  return value >= 0;
});

console.log(allpositive);

//every() which will give true all the elements statisfy the condition
//some() it will return the at least one element which satisfy the condition

const array=[1,-2,3,4,5,6,7,8];

const atleastpostive=array.some(function(number){
  return number >= 0;
});

console.log(atleastpostive);