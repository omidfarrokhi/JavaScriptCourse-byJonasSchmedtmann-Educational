"use strict";

// function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
