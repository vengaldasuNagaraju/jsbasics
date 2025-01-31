// function areaCircle(radius){
//   return 3.14*radius*radius;
// }
// const area = areaCircle(1);
// console.log(area);

const circle = {
  radius:1, 
  get area(){
    return Math.PI * this.radius * this.radius;
  }
};
console.log(circle.area);