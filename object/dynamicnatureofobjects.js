const circle ={

  radius:1

}
// we added the values to the circle object 

circle.color='yellow';

circle.draw =function()
{
}

// for deleting the elements in the object we use this 
delete circle.color;

delete circle.draw;

console.log(circle);