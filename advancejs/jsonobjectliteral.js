 var objectLiteral = {
  firstname:'mary',
  isaprogrammer:true
 }

 console.log(JSON.stringify(objectLiteral));

 var jsonValue=JSON.parse('{"firstname":"mary" , "isaprogrammer": true }');

 console.log(jsonValue);

 // json is format which is like the string 
 //object literal we take the each elements 