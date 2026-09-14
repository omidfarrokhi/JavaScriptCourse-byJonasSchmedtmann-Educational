"use strict";

const jonas = [
  "jonas",
  "schmedtmann",
  46,
  "teacher",
  ["micheal", "peter", "steven"],
  true,
];

// backward
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}: lifting weight rep`);
  }
}
