const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const canDrive = hasDriverLicense && hasGoodVision;

if (canDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);
