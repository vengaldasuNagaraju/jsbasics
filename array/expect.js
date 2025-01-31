const number=[1,2,3,4,5,6,1,2,3];

function except(number ,excluded){
  const output=[];
  for(let key of number)
      if(!excluded.includes(key))
        output.push(key);
  return output;    
  }

const output = except(number,[1,2]);
console.log(output);