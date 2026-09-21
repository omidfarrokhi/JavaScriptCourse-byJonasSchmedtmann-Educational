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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// using default values
restaurant.orderDelivery({
  address: 'Gisha22',
  starterIndex: 1,
});

// destructuring an objec
//// there is no ordering!!!!!(just specify the names)
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring with our own choosen names!!!!
const {
  name: retaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(retaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
// {a, b} = obj; // unexpected token (=) error
// we can't assign something to a block
// we have to wrap in paranthesis!!!
({ a, b } = obj);
console.log(a, b);

// nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// you can also change names
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
