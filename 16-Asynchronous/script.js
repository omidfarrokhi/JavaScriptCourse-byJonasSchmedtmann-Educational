'use strict';

//// OUTPUT ////
// Test start
// Test end
// Resolved  promise 1
// 0 sec timer

console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0); // on callbacks queue

Promise.resolve('Resolved promise 1').then(res => console.log(res)); // on micro-tasks queue

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000000; i++) {}
  console.log(res);
}); // on micro-tasks queue

console.log('Test end');
