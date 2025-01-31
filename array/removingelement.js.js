const number=[1,2,3,4,5];

//poop method which remove remove the at last
const removed=number.pop();
console.log(removed);

//to remove element at first we use the shift method
const removefirst=number.shift();
console.log(removefirst );

//we need to remove at certain index we use the splice indexstart and no of elements to remove
const middle=number.splice(2,1);
console.log(middle);



console.log(number);