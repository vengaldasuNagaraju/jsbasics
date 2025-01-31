//clousers with the callbacks

function sayHiLater(){
  var greeting = 'Hi';
  setTimeout(function()  {
    console.log(greeting);
  }, 3000);
}
sayHiLater();



function tellMeWhenDone(callback){
  var a=1234;
  var b=4321;
  callback();
}

tellMeWhenDone(function(){
console.log('i am done');
alert('i am done!');  
})