'use strict';

// Split & Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(''));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // another way
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(40, '+'));

// another example
const maskCreditCard = function (number) {
  // another way instead of String() method
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12341253412354));
console.log(maskCreditCard(2142134));
console.log(maskCreditCard(51346146167135414513425));

// Repeat
const message2 = 'Bad weather... All departurs delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(11);
