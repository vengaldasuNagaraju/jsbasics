// Function Declaration 

// Function declaration" is a named function allowing it to be called before it's defined due to hoisting. 

// Named function 
function walk(){
  console.log('walk');
}

// Function expression

// function expression is a function defined as part of an expression, usually assigned to a variable, and cannot be called before its definition because it is not hoisted;

// Anonymus Function Expression 
let run = function() {
  console.log('run');
};
run();
