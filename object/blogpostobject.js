//title
//body
//author
//views
//comments
//author,body
//islive


// let post ={
//   title:'a',
//   body:'b',
//   author:'c',
//   views:12,
//   comments:[
//     { author:'a' ,body:'b' },
//     { author:'c' ,body:'d'},
//   ],
//   islive:true
// };

let result=new Post('a','b','c');
console.log(result);

function Post(title, body, author){
  this.title=title;
  this.body=body;
  this.author=author;
  this.views=0;
  this.comments=[];
  this.islive=false;
}