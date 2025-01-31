const circle ={
  radius:1,
  draw(){
    console.log('draw');
  }
};

for(let key in circle){
  console.log(key , circle[key]);
}

// for using the for of loop on not iterable element we use the Object.keys is a string array it is builtin constructor.


for(let key of Object.keys(circle)){
  console.log(key);

}

for(let entry of Object.entries(circle)){
  console.log(entry);
}

if('radius' in circle)
{
  console.log('yes');
}
