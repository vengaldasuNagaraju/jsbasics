function starpattern(number){

  for(let i=0;i<number;i++)
  {
    let pattern='';
    for(let j=0;j<=i;j++)
      pattern =pattern + "*";
    console.log(pattern);
  }
}
starpattern(5);