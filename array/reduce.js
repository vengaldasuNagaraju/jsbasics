 const numbers=[1,-1,2,3,4];
 let sum=0;
 for(let n of numbers){
  sum=sum+n;
 }
 console.log(sum);
 // inside the reduce function we use the accumulator which we take as sum and another one actual value which is name as the each element in an array and setting inital value accumulator to 0 . 
//reduce will have the callback function and the inital value
  // const result=numbers.reduce((accumulator , currentvalue) =>{
  //   return accumulator + currentvalue;
  // },0);

//by not writing the inital value to zero in the reduce then one function call is less than the previous one

  const result=numbers.reduce((accumulator , currentvalue) =>{
    return accumulator + currentvalue;
  });

  console.log(result);