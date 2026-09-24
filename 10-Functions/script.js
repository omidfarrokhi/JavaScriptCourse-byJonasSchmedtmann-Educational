'use strict';

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed strig: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!!!', upperFirstWord);
transformer('JavaScript is the best!!!', oneWord);

// JS uses callbacks all the time!!!!!!
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

// another use-case
['jonas', 'martha', 'adam'].forEach(high5);
