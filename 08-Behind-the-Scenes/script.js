'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavainti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

// taking the first two
let [first, second] = restaurant.categories;
console.log(first, second);
// taking first and third
const [first2, , third] = restaurant.categories;
console.log(first2, third);

// switching as usuall
const temp = first;
first = second;
second = temp;

// with destructuring
[first, second] = [second, first];

// recieve 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// on nested arrays
const nested = [2, 4, [5, 6]];
// taking first and last
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
// assume we dont know number of elements beforehand
// const [p, q, r] = [8, 9]; // we get undefined for r
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
