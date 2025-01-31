function greet(){
  console.log('hi');
}

greet.language = 'english';
// why we cal as the functions are object because the function can acess names , primitives.
console.log(greet);

console.log(greet.language);