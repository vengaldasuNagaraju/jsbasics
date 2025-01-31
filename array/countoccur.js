const number =[1,2,3,4,1,5,6,1];
const count=countOccur(number,1);
console.log(count);

function countOccur(number , searchelement){
  
  // let occur=0;
  // for(let key in number)
  //   if(key === searchelement)
  //     occur++;
  // return occur;
  //by using the reduce method

  return number.reduce((accumulator , current)=>{
    const occurrence = (current === searchelement) ? 1 : 0;
    console.log(accumulator , current , searchelement);
    return accumulator + occurrence;
  },0);
}