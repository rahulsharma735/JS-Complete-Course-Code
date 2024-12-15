/* TASK 1 = Write articale on the methods of the Strings */


const Name =  "Rahul"
const repoCount  = 3;
console.log(Name + repoCount + " Value");//Outrated way of writting the string concantinated

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`); //THIS IS THE MODERN WAY TO WRITE THE CODE FOR THE CONCANTINATE THE STRING (STRING INTERPOLATION)
//Modern way to string writing

//String declearation here string is a object store key value pair data
const gameName =  new String("Rahul-Sh")

//[[Prototype]] : String

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newStr = gameName.substring(0,4)//Last Value included here.
console.log(newStr);

const anotherString = gameName.slice(0,4)//Last Value included here but "Most important thing is that we can give negative value here also."
console.log(anotherString);

const anotherString1 = gameName.slice(-8,4)
console.log(anotherString1);

const newString1 = "    Rahul Sharma    "
console.log(newString1);
console.log(newString1.trim());//read more in mdn for more methods.

const url  = "https:/rahul.com/Rahul%20Sharma"
url.replace('%20', "-");
console.log(url);
console.log(url.replace('%20', "-"));

console.log(url.includes('Rahul'));
console.log(url.includes('hitesh'));
 
console.log(gameName.split('-'));


/* 
Question 1.  what happen if we are given negative value in the substring
ANSWER (anything is not happen but it considered as a zero(0) value)
*/

/*
length: 6
[[Prototype]]: String
anchor: ƒ anchor(),
at: ƒ at(),
big: ƒ big(),
blink: ƒ blink(),
bold: ƒ bold(),
charAt: ƒ charAt(),
charCodeAt: ƒ charCodeAt(),
codePointAt: ƒ codePointAt(),
concat: ƒ concat(),
constructor: ƒ String(),
endsWith: ƒ endsWith(),
fixed: ƒ fixed(),
fontcolor: ƒ fontcolor(),
fontsize: ƒ fontsize(),
includes: ƒ includes(),
indexOf: ƒ indexOf(),
isWellFormed: ƒ isWellFormed(),
italics: ƒ italics(),
lastIndexOf: ƒ lastIndexOf(),
length: 0,
link: ƒ link(),
localeCompare: ƒ localeCompare(),
match: ƒ match(),
matchAll: ƒ matchAll(),
normalize: ƒ normalize(),
padEnd: ƒ padEnd(),
padStart: ƒ padStart(),
repeat: ƒ repeat(),
replace: ƒ replace(),
replaceAll: ƒ replaceAll(),
search: ƒ search(),
slice: ƒ slice(),
small: ƒ small(),
split: ƒ split(),
startsWith: ƒ startsWith(),
strike: ƒ strike(),
sub:ƒ sub(),
substr: ƒ substr(),
substring: ƒ substring(),
sup: ƒ sup(),
toLocaleLowerCase: ƒ toLocaleLowerCase(),
toLocaleUpperCase: ƒ toLocaleUpperCase(),
toLowerCase: ƒ toLowerCase(),
toString: ƒ toString(),
toUpperCase: ƒ toUpperCase(),
toWellFormed: ƒ toWellFormed(),
trim: ƒ trim(),
trimEnd: ƒ trimEnd(),
trimLeft: ƒ trimStart(),
trimRight: ƒ trimEnd(),
trimStart: ƒ trimStart(),
valueOf: ƒ valueOf(),
Symbol(Symbol.iterator): ƒ [Symbol.iterator](),
[[Prototype]]: Object,
[[PrimitiveValue]]: "",
[[PrimitiveValue]]: "rahulS",
*/