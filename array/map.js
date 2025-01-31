//map methd

const number=[1,2,3,4,5,6,-45,343,-233];

const filtered = number.filter( value => value >= 0);

const items = filtered.map(n => {
  return {value : n};
  
});

// const items =filtered.map(value => '<li>' +value +'</li>');

// const html ='<ul>'+ items.join('')+ '</ul';

// console.log(html);





//chaining method 
const item=number
.filter(n => n >= 0)
.map(n => ({ value: n }))
.filter(obj => obj.value > 1)
.map(obj => obj.value);

console.log(item);