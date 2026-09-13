const age = 18;

if (age === 18) {
  console.log("You just became an adult");
}

// loose equality operator
console.log("18" == 18);
// strict equality operator
console.log("18" === "18");

const fav = prompt("What's your favourite number?");
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (fav === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (fav !== 23) {
  console.log("why not 23?");
}
