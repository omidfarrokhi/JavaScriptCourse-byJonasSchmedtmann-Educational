'use strict';

// dangerous behavior of var
//// on the arrown function we get matilda
//// because it adds the firstName = 'Matilda' property
//// to the global window object!!!!!!!!!!!!!!!!!!!!!!!
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);

    const isMillenial = function () {
      // the this won't point to jonas
      // it is called as a regular function so it's undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    //////////////////////////////////////////
    // pre ES6 solution
    // const self = this;
    // and use self instead of this in the inner function
    //////////////////////////////////////////////
    // better newer solution
    // use arrow function
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

//undefined
//// arrow function don't get their own this
//// they inherit the this of their of their parent(here is global scope)
//// and that is the window object and it doesn't have a firstName property
jonas.greet();
jonas.calcAge();
