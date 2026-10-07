'use strice';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Duplicate Code! so:
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype //u may think of this buyt it is completly wrong!!!!!!!!!!!

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // this it will get from the Student prototype
mike.calcAge(); // this it will get from farther up the tree the Person prototype

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// we have to fix a little thing
// JS thinks the constructor of the Student.prototype is Person!
// but we know it is the Student!
// so we have to manually fix
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
