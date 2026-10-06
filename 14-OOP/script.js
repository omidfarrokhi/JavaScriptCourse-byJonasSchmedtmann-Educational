'use strice';

// Constuctor Pattern
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

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // these will be added to .prototype property not the object's properties
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('hey there!!!!!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// it's just a layer to hide defferences from other programming languages
// it is not something new!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('walter white', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// doesn't need calling just like normal properties

// get
console.log(account.latest);
console.log(jessica.age);

// set
account.latest = 50;
console.log(account.movements);

// Methods on the Constructor!
Person.hey = function () {
  console.log('hey there!!!!!!!!!');
};

Person.hey();

// Uncaught TypeError: walter.hey is not a function
// jonas.hey();
// it is defined on the constructor not the Prototype!!!!!!!!!!!!!!!!!!!!

PersonCl.hey();
