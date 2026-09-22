'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavainti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // using object destructuring for function arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order recieved!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  // use the spread operator on function parameters
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// SOME FACTS ABOUT LOGICAL OPERATORS
// we can use any data type,
// return any data type,
// we have short-circuiting!!!!!

// OR
// if the first value is truthy
// don't look at second just return the first!!!
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // jonas
console.log(true || 0); // true
// no short-circuiting so the second value is returned
console.log(undefined || null); // null

// general
console.log(undefined || 0 || '' || 'hello' || 23 || null); // 'hello'

// usefull pattern
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// do
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

///// WARNING : BUT THIS WON'T WORK IF THE ACTUAL NUMBER OF GUESTS IS ZERO!!!!

// AND
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

// general
console.log('hello' && 23 && null && 'Jonas'); // null

// usefull pattern
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
