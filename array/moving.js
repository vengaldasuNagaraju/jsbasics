const numbers =[1,2,3,4];
const output = move(numbers, 0,-1);
console.log(output);
function move(array ,index , offset){
const position=index + offset;
if(position >= array.length || position <0)
{
  console.error('Invalid offset');
  return;
}
  //first we are cloning into output
const output = [...array];
  //we are splice to a certain part from index to next 1 element 
const element =output.splice(index, 1)[0];
  //here we are adding the element to the final code
output.splice(position , 0, element);
return output;
}

