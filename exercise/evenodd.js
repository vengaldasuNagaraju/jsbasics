function evenodd(number){

  for(let i=0;i<=number;i++){
    if(i%2==0)
    {
      console.log(i +"EVEN");
    }
    else{
      console.log(i +"ODD");
    } 
  }
}
let result = evenodd(10);
console.log(result); 