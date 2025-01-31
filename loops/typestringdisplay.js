// in an object the type of the element is string then show properties 


const movie={
  title:'a',
  releaseyear:234,
  rating:4,
  director:'b'
};

function showproperties(obj){
  for(let key in obj){
    if(typeof obj[key] == 'string'){
    console.log(key , obj[key]);
    } 
  }
}
console.log(showproperties(movie));
