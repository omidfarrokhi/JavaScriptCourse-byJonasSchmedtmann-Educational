const day = "Monday";

switch (day) {
  case "Monday": // day === "Monday"
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "Tuesday":
    console.log("prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("write code examples");
    break;
  case "Friday":
    console.log("record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("enjoy the weekend :D");
    break;
  default:
    console.log("not a valid day!");
    break;
}

// the same logic with if & else
if (day === "Monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "Tuesday") {
  console.log("prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("write code examples");
} else if (day === "Friday") {
  console.log("record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("enjoy the weekend :D");
} else {
  console.log("not a valid day!");
}
