function b(){
  var myvar=3;
  c();
  function c(){
    console.log(myvar);
  }
}
function a()
{
  var myvar=23;
  //console.log(myvar);
  b();
  
}
var myvar=2;
//console.log(myvar);
a();