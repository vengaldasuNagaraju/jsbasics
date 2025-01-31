const marks=[10,10,10];
function grade(marks){
  let sum=0;
  let numbers=marks.length;
  for(let value of marks)
  {
    sum=sum+value;
  }
  let avg=sum/numbers;
  if(avg>=1 && avg <60){
    return 'F'
  }
  else if(avg>= 60 && avg< 70){
    return 'D';
  }
  else if(avg>=70 && avg<80){
    return 'C';
  }
  else if(avg>=80 && avg<90){
    return 'B'
  }
  else{
    return 'A';
  }
}
let result = grade(marks);
console.log(result);