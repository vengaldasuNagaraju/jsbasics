



const person={
  firstName:'Mosh',
  lastName:'Hamedani',

  set fullName(value){

    if(typeof value !== 'string')
      throw new Error('value is not a string.')

    const parts = value.split(' ');
    if(parts.length !== 2)
      throw new Error('Enter the First and Last Name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
try{
    person.fullName = '';
  }
  catch(e){
    alert(e);
  }
console.log(person);