const firstName = "Omid";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm" + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log("string with \n multiple \n lines");

console.log(`string with
  multiple
  lines`);
