const number=[1,2,3,4,5];

function includemethod(number , value){
  for(let key of number){
    if(key == value){
      return true;
    }
  }
  return false;
}

console.log(includemethod(number,90));