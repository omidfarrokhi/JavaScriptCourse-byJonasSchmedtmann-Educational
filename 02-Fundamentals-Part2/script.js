"use strict";

// defining a function
function logger() {
  console.log("my name is Jonas");
}

// calling, running, invoking a function
logger();
logger();
logger();

// function can also return
function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
