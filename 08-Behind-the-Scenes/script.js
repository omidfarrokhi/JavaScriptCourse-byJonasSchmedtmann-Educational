'use strict';

// window object
console.log(this);

// for regular function it is undefined
const calcAge = function (birthYear) {
  console.log(2026 - birthYear);
  console.log(this);
};

calcAge(1991);

// for arrow it get the this of parent
// here it's the window object
const calcAgeArrow = birthYear => {
  console.log(2026 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};

//this is the caller
// the jonas object!!!
jonas.calcAge();

const matilda = {
  year: 2017,
};

// method borrowing
matilda.calcAge = jonas.calcAge;
// this points to matilda!!!! (matilda is calling it)
matilda.calcAge();

// method in a variable
const f = jonas.calcAge;
// this points to nothing(undefined) because it's a regular function
f();
