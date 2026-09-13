const age = 14;

if (age >= 18) {
  console.log("Sarah can start getting her driving license 🛻");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft}years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);
