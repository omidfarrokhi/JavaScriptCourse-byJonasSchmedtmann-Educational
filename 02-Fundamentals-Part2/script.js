"use strict";

const jonas = [
  "jonas",
  "schmedtmann",
  46,
  "teacher",
  ["micheal", "peter", "steven"],
  true,
];
const types = [];

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2026 - years[i]);
}

console.log(ages);

// continue and break

// only strings
console.log("---only strings-----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

// break with numbers
console.log("---break with number----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") {
    break;
  }

  console.log(jonas[i], typeof jonas[i]);
}
