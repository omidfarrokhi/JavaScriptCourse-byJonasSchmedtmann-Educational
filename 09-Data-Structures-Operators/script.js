'use strict';

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

// No Duplicates!!!
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

console.log(new Set('Jonas'));

// methods
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();

// no Order
// no indexing
//error: console.log(ordersSet[0]);
for (const order of ordersSet) console.log(order);

// useful use-case (knowing or retrieving unique values)
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

// how many unique character in my name
console.log(new Set('jonasschmedtmann').size);
