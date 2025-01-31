
//factory function use the camel case naming  oneTwoThree
//pascal naming OneTwoThree
 
function createCircle(radius){
  return{
    radius,
    draw()
    {
      console.log('draw');
    }
    };
  }
const circle1 =createCircle(1);
console.log(circle1);

const circle2=createCircle(2);
console.log(circle2); 