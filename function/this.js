//method --> obj
//method in an object refers to an object
//video is an object 
const video ={
  title: 'a',
  play(){
    console.log(this);
  }
};
//method  which refer to an object 
video.stop = function(){
  console.log(this);
};

video.stop();

// function is a regular function it is not a part of an object this reference to a global object which is window object in browser and global in node.
//function ->global (window , global)

const audio={
  titile:'a',
  played(){
    console.log(this);
  }
};

function Audio(){
  this.title =this.title;
  console.log(this);
}

const a = new Audio('a');

//when we are dealing with regular function this by default refernce to global object if we call a function using the new operator which is the case for constructor function which reference to a new empty object

