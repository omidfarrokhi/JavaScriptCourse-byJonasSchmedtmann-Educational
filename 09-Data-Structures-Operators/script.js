'use strict';

const airline = 'TAP Air Portugal';
const plant = 'A320';

// indexing
console.log(plane[0]);
console.log(plane[1]);

// length
console.log(airline.length);

// index of
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case sensetive

// slicing
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// mostly we don't know the string's charactistic
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You were lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('2E');

// but why it works?
// aren't Strings primitives?
// why do they have methods?
// isn't method just for Objects???????????????????

// indeed :>>>
// JS is so smart !!!!!!!!!!!!!!
// whenever we call a method on a String
// JS automatically convert that String primitive to an String Object,
// on that Object the method is called,
// then it converts back!!!

// this happens behind the scene :))))
console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
