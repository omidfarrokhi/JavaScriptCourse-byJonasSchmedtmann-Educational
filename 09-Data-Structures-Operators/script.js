'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // post ES6 we can also compute properties names
  // in addition to the values
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavainti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // before ES6
  // openingHours: openingHours,

  // ES6 enhanced object literal
  openingHours,

  // ES6 easier way to write methods
  // no need to explicitly declare function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // using object destructuring for function arguments
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recieved!!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  // use the spread operator on function parameters
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();

// SET method
rest.set('name', 'Classico Italiano');

// it returned the modifed map!!!!
console.log(rest.set(2, 'Lisbon'));
// we can chain
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

// GET method
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// HAS method
console.log(rest.has('categories'));

// DELETE method
// but it's slow (don't use it :/)
rest.delete(2);

// CLEAR method
// rest.clear();

console.log(rest);
console.log(rest.size);

// for objects it won't work this way:
// rest.set([1, 2], 'Test');
// this is a whole new object
// rest.get([1, 2]);
// we need a refrence
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

// SO WE CAN PUT OBJECTSSSSS ASSSS MAP KEYSSSSS
// HOW COOL IS THATTTTTTTTTTTTTT
rest.set(document.querySelector('h1'), 'Heading');
