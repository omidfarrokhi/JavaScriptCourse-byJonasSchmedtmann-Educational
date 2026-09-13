const age = 23;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water🥤");

// more useful in declaring variables
const drink = age >= 18 ? "wine🍷" : "water🥤";
console.log(drink);

// the if-else version
let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water🥤";
}

// more usefulllll
console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water🥤"}`);
