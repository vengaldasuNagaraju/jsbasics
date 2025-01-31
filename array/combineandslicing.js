//refernce type

const third=[{id:1}];

//this is totally primitive type 
const first=[1,2,3];
const second=[4,5,6];

// for combing two arrays i am using the concat method
const combined = first.concat(second);
// for making it into two parts we use the slice with starting index and ending index
const slice=combined.slice(2,4);

console.log(combined);

console.log(slice);

const combine = third.concat(second);
third[0].id=10;
console.log(combine);
const sliced=combine.slice();

console.log(sliced);
