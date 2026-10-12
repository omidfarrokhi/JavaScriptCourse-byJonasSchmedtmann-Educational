// importing module

console.log('importing module');

// the intent of writing this is not code re-use
// only to create new scope and return data only once!!!
const shippingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shippingCart2.addToCart('apple', 4);
shippingCart2.addToCart('pizza', 2);
console.log(shippingCart2);
console.log(shippingCart2.shippingCost); // not accessible (like private properties)

///////////////////////////////////
///////the reason why all this works is CLOSURES///////////
///////////we have run the function and it has returned and it is over but still the addToCart can access the unexported (not returned) properties any time we call it!!!!!!!!!!!!
