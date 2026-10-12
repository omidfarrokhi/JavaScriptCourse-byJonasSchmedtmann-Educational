// exporting module
console.log('exporting module');

// CommonJS Module

// Export (this won't work in browser but is the correct syntax in nodejs)
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
  );
};

// Import
const { addToCart } = require('./shoppingCart.js')