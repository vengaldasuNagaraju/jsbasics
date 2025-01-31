const address={
  street:'9-30',
  city:'peddapalli',
  zipcode:505525
}

function showaddress(obj){
  for(let key in obj){
    console.log(key ,obj[key]);
  }
}

showaddress(address);