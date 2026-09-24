'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Omid');

greet('Hello')('Omid');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Iman');
