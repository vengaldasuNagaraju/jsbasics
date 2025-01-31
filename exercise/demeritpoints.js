//speed limit =70
//5increase  ->1 point
// 12points -> suspended 180



function speedlimit(speed){
  const speedlimit=70;
  const kmperpoint=5;
  if(speed<=speedlimit + kmperpoint){
    return 'ok';
  }
  else{
    let points = Math.floor((speed - speedlimit) / kmperpoint);
    if(points>=12){
      return 'license suspended';
    }
    else{
      return points;
    }
  }
}
let result=speedlimit(890);
console.log(result);