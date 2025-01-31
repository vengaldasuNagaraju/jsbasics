// we use the join method to concatante the all elements in this array separeted by commas or a specified separator string

const numbers =[1,2,3];
const joined =numbers.join(',');
console.log(joined);

const message='this is my first message';
const spliting=message.split(' ');

console.log(spliting);

const combined=spliting.join(' ');
console.log(combined);