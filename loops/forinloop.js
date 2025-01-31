const person={
  name:"nagaraju",
  age:23,
  gender:"male"
}

// we use the for in loop to iterate over an array and properties of an objects 

for(let key in person){
  console.log(key , person[key]);
}

const colors=['red' ,'yellow' ,'green'];
for(let index in colors){
  console.log(index,colors[index]);
}