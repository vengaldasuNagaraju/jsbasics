function sum3and5(number){
  let sum=0;
  for(let i=0;i<=number;i++){
    if(i%3 == 0 || i%5 == 0){
      sum=sum+i;
    }
  }
  return sum;
}

let result=sum3and5(10);

console.log(result);