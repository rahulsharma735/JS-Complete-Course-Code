/*Javascript has dynamically typed language and from one point of view, it is good because 
it’s pretty simple to assign values to the variables. */

// Primitive (call by value = copy version)
/*  7 types  : string , Number, Boolean, null(empty), undefinded, Symbol(it is used to make something unique), BigInt*/

const score = 100;
const scoreValue = 100.3

const isLoggedIN = true;
const outSideTemp = null;//

let userEmail;

const id = Symbol('123')
const id1  =  Symbol('123')

// console.log(id == id1);// Id of both the ids would be always unique.

// const bigNumber = 54754153215821548n 



/*Non Primitive (Reference type) {call by referene if once  we change the value at that time automatically change in the 
 value at all reference .}*/

/* Arrays, Objects(imp), Function  */

const heros = ["rahul", "neeraj", "kamal"] // ARRAYS

let myObj = {
    name: "rahul",
    age : 222
}   // It is the object in javascript.

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);

console.log(typeof id);


console.log(typeof myfunction);//called as object Function (function object)


/*
* Premitive Datatypes

                Type                                typeof

i)             Number                               number
ii)            String                               string
iii)           Boolean                              boolean
iv)           Bigint                                bigint
v)            Symbol                                symbol
vi)           Null                                  object
vii)          Undefined                             undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. You can assign different 
types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the 
variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors 
if not handled carefully. Static typing, on the other hand, provides better type safety at the 
cost of some initial verbosity and strictness.
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive Data Type Stores This Type of memory)
// Heap (Non-Primitive Data Type uses this)
console.log("-----------------------------------------------");

let myYoutubeName = "rahulsharma.com"
let anotherName = myYoutubeName;

anotherName = "chaiaurCode"

console.log(anotherName);
console.log(myYoutubeName);


let user  = { //Objects
    email: "rahulsharmagmail.com",
    upi: "rahulsharma@ibl"
}

let user2 = user;
console.log(user2);

user2.email = "rahulkhandal@gmail.com";
console.log(user.email);
console.log(user2.email);
