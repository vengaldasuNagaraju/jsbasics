function fizzbuzz35(input){
  if(typeof input !='number'){
    return 'not a number';
  }
  else if(input %3 == 0){
    return 'Fizz';
  }
  else if(input % 5==0){
    return 'Buzz';
  }
  else if((input %3==0) && (input %5 == 0)){
    return 'FizzBuzz';
  }
  else{
     return input;
  }
 
}
let result = fizzbuzz35(15);
console.log(result);