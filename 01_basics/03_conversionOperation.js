let score = 33
let score1 = "33abc"
//let score1 = null //in the case of null it shows the '0'.

// console.log(typeof(score));
// console.log(typeof(score1));

let valueInNumber = Number(score1);
console.log(valueInNumber); //print a NAN(not a number) beacuse it not a pure no but it covert into number but not print actual.
console.log(typeof valueInNumber)

/* 
"33" -> 33
"33abc" -> NAN
true -> 1; fasle -> 0
*/
let isLoggedIN = 1; // return otput as true.
isLoggedIN = "";//return false


let booleanIsLoggedIn = Boolean(isLoggedIN);

console.log(booleanIsLoggedIn);
// 1 => true; 0 -> fasle
// "" -> false
// "rahul" -> true

let someNumber  = 33
// console.log(typeof stringNumber);
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
console.log(typeof stringNumber);