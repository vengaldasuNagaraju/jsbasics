const array =[1,4,5,7,53,445,4545654];
const  max=getMax(array);
console.log(max);
function getMax(number){
  if(number.length === 0) return undefined;
  // let max=array[0];
  // for(let i=1;i<array.length;i++){
  //   if(array[i] > max){
  //     max=array[i];
  //   }
  // }
  // return max;

  return number.reduce((accumulator , current)=>{
    if(current>accumulator) return current;
    return accumulator;
  })



}