const array =[0 , null , undefined , '', 2 , 3];
console.log(counttruthy(array));

function counttruthy(array){
  let count=0;
  for(let key of array){
    if(key){
      count++;
    }
  return count;
  }
}