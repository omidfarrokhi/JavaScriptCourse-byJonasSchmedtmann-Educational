// importing module
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart';
// addToCart('bread', 5);
// console.log(price, totalQuantity);

// import * as shoppingCart from './shoppingCart.js';

console.log('importing module');
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart); // the exports are dynamic (they reflect the changes)

// Top-level await is only available in the module scripts
// it's not that efficient because it blocks module execution

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// calling async function alwayysss returns a promise
const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(last => console.log(last)); // not very clean

const lastPost2 = await getLastPost();
console.log(lastPost2);
