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

// better way than .set()

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct!!!!'],
  [false, 'try again:('],
]);
console.log(question);

// it's similar to Object.entries method!!!!!!
console.log(Object.entries(openingHours));

// conver object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration (the quiz app)
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(question.get(answer === question.get('correct')));

// convert back map to array
console.log(...question);
