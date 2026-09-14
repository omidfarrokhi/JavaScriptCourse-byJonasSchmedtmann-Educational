"use strict";

// JS object's literal notation
const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["micheal", "peter", "steven"],
  hasDriversLicense: true,

  // functions are just a value
  // just like bool, number, array values

  ////// not so good method

  /*
  calcAge: function (birthYear) {
    return 2026 - birthYear;
  },
  */

  ////// better method (don't repeat ys)

  calcAge: function () {
    return 2026 - this.birthYear;
  },
};

/*
console.log(jonas.calcAge(1991));
console.log(jonas["calcAge"](1991));
*/

console.log(jonas.calcAge());
