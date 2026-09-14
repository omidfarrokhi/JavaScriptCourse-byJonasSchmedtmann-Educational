"use strict";

// JS object's literal notation
const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["micheal", "peter", "steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

// you can use expression on bracket but not on dot
const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interestedIn = prompt("what do you want to know?");
// error: the output is undefined
// jonas has no property named interestedIn :?
console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);

// modifying object
jonas.location = "portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);
