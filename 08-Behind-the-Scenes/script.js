'use strict';

// variables
console.log(me); //undefined
//error
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3)); // hoisted and works
// console.log(addExpr(2, 3)); // can't access before initialization
// console.log(addArrow(2, 3)); // can't access before initialization

function addDec1(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// addExpr is not a function (because it's undefined)
var addExpr = function (a, b) {
  return a + b;
};

// addArrow is not a function (because it's undefined)
var addArrow = (a, b) => a + b;

// example (a hard to find bug because of the wierd var behavior)
// var is undefined at the time and we enter the condition!!!!!
if (!numProduct) {
  deleteShoppingCart();
}

var numProduct = 10;

function deleteShoppingCart() {
  console.log('all products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// the variables declared with var turn into a property in the window object!!!
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
