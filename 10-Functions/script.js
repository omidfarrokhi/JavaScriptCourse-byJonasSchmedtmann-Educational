'use strict';

// example 1
// we don't necessirly need returning a function to have closure
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assigning f function
h();
f();
// it lost the previous closure and now has b in its closure
console.dir(f);

// example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start baording in ${wait} seconds`);
};

// the closure has priority to the scope chain
// the function will use inner perGroup not the global one!!!!!!!!!!!!!!!!
const perGroup = 1000;

boardPassenger(180, 3);
// we finish the function way before
// but after the timer ends the callback still has access to function variables (the function that has finished execution way before)
