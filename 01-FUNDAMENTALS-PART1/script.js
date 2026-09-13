/*
let js = "amazing";

console.log(40 + 8 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Vars shouldnt start with numbers
// don't start with special characters
// don't use keywords

// conventions
// don't start with upper case (it's for objects)
// always be declerative

// don't
let job1 = "programmer";
let job2 = "athlete";

// do
let myFirstJob = "Programmer";
let mySecondJob = "athlete";
*/

// bool
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

// undefined (both value of the var and
// type of the var will be "undefined")
let year;
console.log(year);
console.log(typeof year);

// change the variable value (dynamic typing)
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let x = null;
console.log(x);
// it's a bug never fixed for lagacy reasons
// type of null returns object!!!!
// but it should return null!!!
console.log(typeof x);
