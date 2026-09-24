'use strict';

const bookings = [];

// adding defaultssssssssssss
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // before ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
// skipping a parameter
// using the default
createBooking('LH123', undefined, 1000);
