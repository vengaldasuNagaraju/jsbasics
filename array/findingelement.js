// primitive types finding 
const numbers =[1,2,3,1,4];
console.log(numbers.indexOf('a'));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// reference types of finding

const courses=[
  {id:1 ,name:'a'},
  {id:2,name:'b'},
];
console.log(courses.includes({id:1 , name:'a'}));  // these reference to the false because both are at different references for that purpose we use find

const course = courses.find(function(course){
  return course.name === 'a';
});
console.log(course);

// for getting the index we use the findindex method

const course1 = courses.findIndex(function(course1){
  return course1.name === 'a';
});
console.log(course1);

// arrow function 
const course2=courses.find(course2=>course2.name === 'a');
console.log(course2);