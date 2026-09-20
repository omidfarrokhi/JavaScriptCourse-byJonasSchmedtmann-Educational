'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var is function scoped!!!!
      var millenial = true;
      // if we have a global and a local, engine chosse the nearest
      const firstName = 'steven';

      // reassigning outer scope's variable
      // we didn't define a new variable we modified the value
      // so it will affect outer scope variable
      output = 'NEW OUTPUT';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // error
    // console.log(str);
    console.log(millenial);
    // error
    // functions are block scoped in strict mode
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'jonas';
calcAge(1991);
// error:
// console.log(age);
// printAge();
