'use strict';

// object refreneces in practice (shallow vs. deep copies)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryperson(person, newLastName) {
  person.lastName = newLastName;
  return person;
}

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
const marriedJessica = marryperson(jessica, 'Davis');

// they are the same because we're using refrences to the same thing
console.log('Before:', jessica);
console.log('After:', marriedJessica);

const lia = {
  firstName: 'Lia',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const liaCopy = { ...lia };
liaCopy.lastName = 'Davis';

console.log(lia, liaCopy);
liaCopy.family.push('Mary');
liaCopy.family.push('John');

// the family variable is a refrence
// we just made a first copy (Shallow copy)
console.log('Before:', lia);
console.log('After:', liaCopy);

// Deep copy/clone
const liaClone = structuredClone(lia);
liaClone.family.push('mohammad');

console.log('Original:', lia);
console.log('Clone:', liaClone);
