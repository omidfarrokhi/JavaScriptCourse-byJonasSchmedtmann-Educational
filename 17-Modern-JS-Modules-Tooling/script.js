// importing module
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart';
// addToCart('bread', 5);
// console.log(price, totalQuantity);

// import * as shoppingCart from './shoppingCart.js';

console.log('importing module');
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);
