//Bind method 
//it will create a new function and when that new function is called it is set this keyword to the first argument which is passed to bind method.

let nameobj={
  name:'nagaraju'
}
let printName={
  name:'saichandu',
  sayHi:function(){
    console.log(this.name);
  }
}

let result=printName.sayHi.bind(nameobj);
result();

//Call Method 
//call method directly call the function and set this to the first argument to the call method  and we can provide other argumnets as normal
// it doesnt return a new function 

let surname={
  surname:"vengaldasu"
}
let print={
  surname:'samala',
  sur:function(age){
    console.log(this.surname + " age is " + age);
  }
}
print.sur.call(surname,23);

//Apply Method
//apply method call the function directly and set this to the first argument passed to apply method .
//if other argumnets are provided as an array are passed to the call method they are passsed as the arguments to the function.

let fullname={
  middlename:'nagaraju'
}
let printMiddleName={
  middlename:'saichandu',
  midname:function(age){
    console.log(this.middlename +" age is "+age);
  }
};
printMiddleName.midname.apply(fullname ,[34]);