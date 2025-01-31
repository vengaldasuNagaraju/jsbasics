//hour
//if hour is between 6 am and 12 pm : good morning 
//if hour is between 12pm and 6pm good afternoon 
//othherwise : good evening 

let hour=12;

if(hour>=6 && hour<12){
  console.log('Good morning');
}
else if(hour>=12 && hour<18){
console.log('Good Afternoon');
}
else{
  console.log('Good Evening');
}