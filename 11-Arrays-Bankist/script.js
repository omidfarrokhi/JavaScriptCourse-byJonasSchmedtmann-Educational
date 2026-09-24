'use strice';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// for-each also works with maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// also on sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// the second parameter is completely useless in sets
// because we dont have an index nor keys in sets
// its the same as first for integrity
currenciesUnique.forEach(function (value, key, maps) {
  console.log(`${key}: ${value}`);
});
