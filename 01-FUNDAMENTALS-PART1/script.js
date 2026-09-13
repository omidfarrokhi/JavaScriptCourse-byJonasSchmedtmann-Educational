// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof Nan);

console.log(String(23), 23);

// type coercion
//// Number to String
console.log("I am" + 23 + "years old");
//// String to Number (you cant perform the operation on strings)
console.log("23" - "10" - 3);
console.log("23" / "2");
