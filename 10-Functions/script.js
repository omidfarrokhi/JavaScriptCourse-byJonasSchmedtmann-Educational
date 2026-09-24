'use strict';

// we want a function that run one and only once

// this can work but nothing is stopping us from calling the function again
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// imidiently invoked function expression (IIFE)
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
