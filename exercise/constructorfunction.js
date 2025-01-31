//constructor function

function Circle(radius){
  this.radius =radius;
  this.draw = function(){
    console.log('draw');
  }
}

// we have to create the object 

// when we use he new operator we have 3 process they are 
//1: new will create an empty object 
//2: it will set this to the object
//3: and finally it will return the object from the function

const circle = new Circle(1);
circle.draw(); 


//in factory function we create an object in fractory function we call the function  in this function we will return the object
// in constructor we use the new operator and instead of writtening an object we us ethe this keyword.