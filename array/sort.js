//primitive types 

const numbers=[2,3,1];
numbers.sort();
console.log(numbers);  //1,2,3

numbers.reverse();
console.log(numbers); // 3,2,1


//reference types by objects 

const courses=[
  {id:1 ,name:'Mode.js'},
  {id:2 , name:'javascript'},
];

courses.sort(function(a,b){
  //to follow the case sentive we are converting it into single case 
  const nameA =a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if(nameA<nameB) return -1;
  if(nameA>nameB) return 1;
  return 0;
});

console.log(courses);