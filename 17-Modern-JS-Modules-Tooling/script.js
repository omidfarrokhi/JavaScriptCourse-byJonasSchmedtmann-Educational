// importing module
// import './shoppingCart.js';
import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart';

console.log('importing module');

// console.log(shippingCost); the global variables of the exporting module won't be usable!

addToCart('bread', 5);
console.log(price, totalQuantity);
