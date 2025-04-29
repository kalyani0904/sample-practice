// ---------Number---------

const number = 100 
console.log(number);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.4239
// only presize value so it become roundoff 
console.log(otherNumber.toPrecision(3));

const nums = 1000000
// covert into indian value
console.log(nums.toLocaleString("en-IN"));


// ---------Maths-----------

console.log(Math);
console.log(Math.abs(-45));
console.log(Math.round(4.3));

console.log(Math.ceil(4.6));
// roundoff in upper value

console.log(Math.floor(4.8));
// roundoff in lowest value

console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.min(3,4,3,7,1,2));
console.log(Math.max(3,4,3,7,1,2));

// random value is betn 0-1 
console.log((Math.random()*10)+1);
// to avoid 0 add +1 , so the min value will be 1

let min = 10
let max = 20

// both method can be use
console.log(Math.floor(Math.random() * (max - min + 1))+ min)
console.log(Math.floor(Math.random() *20)+10)




