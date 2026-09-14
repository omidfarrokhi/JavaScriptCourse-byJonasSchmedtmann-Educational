"use strict";

const friend1 = "micheal";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["micheal", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// even though it's a const var
//  single elements can be modified
friends[2] = "Jay";
console.log(friends);
// what you can't do is replacing the entire array
// friends = ["Bob", "Alice"];

job = "teacher";
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, job, friends];
