'use strice';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('-------------------for each------------');

// for-each (it works with a call-back function)
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

////////////////////////////////////////////////
// CONTINUE AND BREAK DOES NOT WORK WITH FOR EACH!!!!!!!!!!
/////////////////////////////////////////////////////////////////////////
