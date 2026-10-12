import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import add, { cartl } from './shoppingCart.js';
add('pizza', 2);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone); // it will be mutated :(

// it's not an actual full scale copy
// it's a good idea to use Lodash!!!!!
//// an open-source module that implement usefull JS methods

console.log(stateDeepClone);
