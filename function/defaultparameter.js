// when we are declare the default parameters it will declare3d to last if it is declared in between then we need to keep all the parameters right of these are the default parameter passing elements.

function interest(principal , years , rate=3.5){
  return principal * rate /100 * years ;
}
console.log(interest(10000,5));