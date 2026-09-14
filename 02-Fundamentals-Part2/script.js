"use strict";

const friends = ["micheal", "steven", "peter"];

// add to the end (returns the new length)
friends.push("omid");
console.log(friends);

// add to the beginning (returns the new length)
friends.unshift("john");
console.log(friends);

// remove last (returns the element)
friends.pop();
console.log(friends);

// remove first (return the element)
friends.shift();
console.log(friends);

// pos
console.log(friends.indexOf("steven"));

// ES6 method
console.log(friends.includes("steven"));
//// returns -1 if not in array
console.log(friends.includes("bob"));
//// check by strict equality operation
//// does not do type coartion
if (friends.includes("steven")) {
  console.log("You have a friend name steven!!!");
}
