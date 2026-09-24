'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'jonas schmedtmann');
lufthansa.book(635, 'john smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// this DOES NOT WORK
// because we don't have this keyword
// the function is called as a regular function
// book(23, 'Sarah Willians);

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'marry cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 593, 'omid farrokhi');
console.log(swiss);

// Apply method
const flightData = [538, 'Goarge cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// but this is older
// we don't use it that much now that we have spread
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven williams');

// we can go even farther
// assigning a preset argument value
// Partial Application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// another use-case with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {};
lufthansa.buyPlane = function () {
  // the this actually is the button the event is attached to!!!!!!! not the lufthansa object
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// the this actually is the button the event is attached to!!!!!!! not the lufthansa object
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// we use bind method
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// a useful tax value
// we don't care about the this keyword
// because it is n
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// writing it with higher-level functions
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
