

  // A closure in JavaScript is a function that has access to the variables and parameters of its outer function, even after the outer function has finished executing. 

  // A closure is created when a function is defined within another function. 
  // The inner function retains a reference to the variables and parameters of the outer function. 
  // This allows the inner function to maintain a persistent state. 


function greet(whattosay){
  return function(name){
    console.log(whattosay + ' '+name);
  }
}
// greet('hi')('tony');

var sayHi=greet('hi');
sayHi('Tony');


// understanding clousers 

function buildFunctions(){
  var arr=[];
  for(var i=0;i<3;i++){
    arr.push(
      function(){
        console.log(i);
      }
    )
  }
  return arr;
}


var fs=buildFunctions();

fs[0]();  //3

fs[1]();  //3

fs[3]();  //3