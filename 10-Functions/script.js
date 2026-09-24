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
