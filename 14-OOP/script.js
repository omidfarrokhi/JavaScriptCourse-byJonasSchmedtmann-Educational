'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods
  // never do this (never create method inside constructor)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object is created. {}
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes

// every object created with the constructor will have access to a prototype object
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// wierd but true!!!
// the Person.prototype is not the prototype of Person
// but the prototype of every Object created by the Person constructor
// it should be actually called (.prototypeOfLinkedObjects)

// defining and initializing the __proto__ property is done in step 3!!!!
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// a property not inside the object but in the prototype!!!!!!
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// the Person prototype
console.log(jonas.__proto__);
// the Object prototype
console.log(jonas.__proto__.__proto__);
// null
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Arrays Prototype ([] is the same as new Array())

const arr = [1, 2, 2, 4, 3, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Object
console.log(arr.__proto__.__proto__);

// Modifying the Built-in prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Its better to not do this!!!!!!!!!!!!
// Don't mess with built in JS methods!!!!

const h1 = document.querySelector('h1');
console.dir(h1);

// the functions are also objects, so...
console.dir(x => x + 1);
