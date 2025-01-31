//we are handling an error the function accept only the array if we pass except array we will get the error.
  
try{
  const numbers=[1,2,3,4];
  const count =countOccurrences(null ,1);
  console.log(count);
}
catch(e){
   console.log(e.message);
}

function countOccurrences(array ,searchelement){

  if(!Array.isArray(array))
    throw new Error('Invalid array.. ');

  return array.reduce((accumulator ,current)=>{
    const occurrence = (current === searchelement) ? 1: 0;
    return accumulator + occurrence
  }, 0);
}
