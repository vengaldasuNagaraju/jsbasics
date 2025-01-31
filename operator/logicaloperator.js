//it will check condition if both are true result is true.
let highincome = true;
let goodcreditscore=true;
let eligibleforloan =highincome && goodcreditscore;

console.log(eligibleforloan);

//it will give result true any one of the condition is true. 
let taxpaying=true;
let salarycuttingtax=false;
let salary =taxpaying || salarycuttingtax;
console.log(salary);

// not operator it will result the opposite of the opeator

let applicationrefused =!eligibleforloan
console.log(applicationrefused);


//falsy(false)
//undefined
//null
//0
//false
//''
//NaN
 

// false || true  ->true
// false || 'mosh' ->  "mosh"
// false || 1 -> 1
//short-circuting 
// false || 1 || 2  -> 1

//Anything that is not falsy -->truthy

let userClor = 'red';
let defaultColor = 'blue';
let currentColor =userClor || defaultColor
console.log(currentColor);  // red

let usercolor = undefined;
let defaultcolor = 'blue';
let currentcolor =usercolor || defaultcolor
console.log(currentcolor);  // blue
