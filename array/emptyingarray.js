let numbers=[1,2,3,4];
let another=numbers;

//solution 1
//numbers=[];

//solution 2
//numbers.length=0;

//solution 3
//numbers.splice(0,numbers.length);

//solution 4 using pop but not prefered at all due to time complexity 
// while(numbers.length!=0){
//   numbers.pop()
// }

console.log(another);
console.log(numbers);