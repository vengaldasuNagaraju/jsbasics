// object-oriented programming (oop)
//it is a collection of objects which talk to each other to perform some functanalities
// A function is a part of the object in object oriented then we call that function as the method

// object-literal syntax
const circle={
  radius:1,
  location:{
    x:1,
    y:1
  },
  isvisible: true,
  draw: function(){
    console.log('draw');
  }
};

circle.draw(); //method 