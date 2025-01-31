//cloning 

const circle = {
  radius : 1,
  draw(){
    console.log('draw');
  }
};

// 1st method 
// const another = {};
// for(let key in circle){
//   another[key]=circle[key];
// }

 //2nd approach

// const another = Object.assign({
//   color:'red'
// },circle); 

// 3rd approach  by using spread operator 
const another ={ ...circle };

console.log(another);