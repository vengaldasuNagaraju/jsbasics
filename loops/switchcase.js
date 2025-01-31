let role='pro';
switch(role){
  case 'guest':
    console.log('Guest user');
    break;

  case 'moderator':
    console.log('moderator user');
    break;

  case 'pro':
    console.log('pro user');
    break;

  default:
    console.log('unknown user');
    break;
}

if(role === 'pro'){
  console.log('pro user ');
}
else if(role === 'moderator'){
  console.log('moderator user');
}
else{
  console.log('guest user');
}