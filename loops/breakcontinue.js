console.log('break clock is started');
let i=0;
while(i<=7){
  console.log(i);
  if(i==5){
    break;
  }
  i++;
}
console.log('continue block is started ');
let j=0;
while(j<=20){
  if(j%4==0){
    j++;
    continue;
  }
  
  console.log(j);
  j++;
}