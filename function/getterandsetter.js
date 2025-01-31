//getters  -> to access the properties of an object
//setters   -> to change or mutate them 

//by using the getter we can read the person full name like a property
// by using the setter we can set it from the outside.

const person={
  firstName:'Mosh',
  lastName:'Hamedani',
  get fullName(){
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Vengaldasu Nagaraju';

console.log(person);