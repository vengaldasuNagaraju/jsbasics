//in the below we using the rest operator to pass the elements to the sum function and we are passing the array thats y it is taking the array at the 0 index for moving that 0 index array to the othet array by using the spread operator and apply he reduce method to solve the sum problem.

console.log(sum([1,2,3,4,5]));

function sum(...items){
  if(items.length === 1 && Array.isArray(items[0]))
    items=[...items[0]];
  return items.reduce((a,b)=> a+b);  
}