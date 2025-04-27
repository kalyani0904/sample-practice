// primitive datatypes
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
// JavaScript is a dynamic language and not static, which means that 
// variables can hold values of different types during runtime.
const  value = 100;
const  scorevalue = 100.4;
const isadult =  false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId);

const bigNumber = 140254615312548n


// Reference (Non primitive) => Array, Objects, Functions

let myArr = ["kalyani",'shruti'];

let Obj = {
    name:"kalyani",
    age:20
}

let func = function(){
    console.log("hello");
    
}
console.log(typeof myArr);
console.log(typeof Obj);
console.log(typeof outsideTemp);
console.log(typeof func);
console.log(typeof bigNumber);
console.log(typeof id);

// Return type of variables in JavaScript
/*1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object*/
