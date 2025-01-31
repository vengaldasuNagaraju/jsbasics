// let address={
//   stret:'q',
//   city:'v',
//   zipcode:'34'
// }

function createAddress(stret , city , zipcode){
return {
 stret,
 city,
 zipcode 
}
}
const result = createAddress('a' , 'b' ,'c');
console.log(result);

// conditional function 

function Address(stret, city , zipcode){
  this.stret=stret;
  this.city=city;
  this.zipcode=zipcode;
}

let total=new Address('q','w','e');
console.log(total);