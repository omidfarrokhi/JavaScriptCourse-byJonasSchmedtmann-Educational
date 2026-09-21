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
};

// adding two elements at the beginning
const arr = [7, 8, 9];
// normally :{
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// the good wayyyyyyyy!!!
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

// also used in
console.log(...goodNewArr);

// it's a new entire array!
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// The Spread operator works on all iterables!!!!
// iterables: arrays, strings, maps, sets, but NOT OBJECTS!
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// error : we do not expect multiple values on the template literal
// console.log(`${...str} schmedtmann`);

// real-word example
const ingredients = [
  prompt("let's make pasta! ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

/////////////////////////////////////////////////////////////
// since ES6 Spread Operator can be used on objects!!!!!
const newRestaurant = {
  foundIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};

console.log(newRestaurant);

// making copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
