console.log(1|2); //-> result 3 

console.log(1&2); //-> result 0

// Read , Write , Execute 
//00000100
//00000010
//00000001

const readpermission=4;
const writepermission=2;
const executepermission=1;

let mypermission=0;
mypermission=mypermission | readpermission | writepermission;
console.log(mypermission); //-> result 6;

let message = (mypermission & readpermission) ? 'yes' :'no';
console.log(message);//->yes
