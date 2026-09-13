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

//////////////////////////////////////////////////////////////////

/*
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
*/

//////////////////////////////////////////////////////////////////////

/*
// defining using let (you can mutate)
let age = 30;
age = 31;

// defining using const (unmutable)
const bithYear = 1991;
// error >> birthYear = 1990;

// defining using var (same as let)
// but let is block scoped
// var is function scoped
var job = "programmer";
job = "teacher";

// not defining anything at all!!!!!
// terrible idea, because it will be defined globally!
lastName = "schmedtmann";
*/

/////////////////////////////////////////////////////////////////////////

// mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Omid";
const lastName = "Farrokhi";
console.log(firstName + "" + lastName);

// assignment operators
let x = 10 + 5;
x += 10;
x++;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// operators presedence (- is applying first!)
console.log(now - 1991 > now - 2010);
