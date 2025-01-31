// we use this spread operator to combine the arrays

const first =[1,2,3];

const second =[4,5,6];

//by using this we can add the more elements 
const combine=[...first ,'a', ...second ,'b'];
const result=[...combine];

console.log(result);

const slice=result.slice(4);
console.log(slice);