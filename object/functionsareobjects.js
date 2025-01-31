function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
Circle.call({},1)
Circle.apply({} ,[1,2,3]) // we use the apply when we need to pass the second element as the array.
//when we are writing the new keyword it will create empty object internally {} and pass as a first argument to the call method this object referces the context this we are using. this will reference the object.
const another = new Circle(1); 
