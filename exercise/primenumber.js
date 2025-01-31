function primenumber(number)
{
  for(let i=2;i<=number;i++){
    let isprime=true;
    for(let j=2;j<i;j++){
      if(i%j == 0){
        isprime=false;
        break;
      }
    }
     if(isprime){
      console.log(i);
     }
  }
}
primenumber(20); 