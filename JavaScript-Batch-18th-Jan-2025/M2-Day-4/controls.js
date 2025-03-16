//if statement
let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}

//voting
let age = 25;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//Grades
let score = 87;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//Day of week
let Day = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

if (Day === 1) {
  console.log("Today is Monday");
} else if (Day === 2) {
  console.log("Today is Tuesday");
} else if (Day === 3) {
  console.log("Today is Wednesday");
} else if (Day === 4) {
  console.log("Today is Thursday");
} else if (Day === 5) {
  console.log("Today is Friday");
} else if (Day === 6) {
  console.log("Today is Saturday");
} else {
  console.log("Today is Sunday");
}

//age category
let $age = 25;

if ($age < 18) {
  console.log("You are a minor");
} else if ($age < 30) {
  console.log("You are a young adult");
} else if ($age < 50) {
  console.log("You are an adult");
} else if ($age < 65) {
  console.log("You are a senior citizen");
} else {
  console.log("You are an elderly person");
}

//switch
let color = "blue";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "green":
    console.log("The color is green");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "yellow":
    console.log("The color is yellow");
    break;
  default:
    console.log("Unknown color");
}

//HTTp status
let statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Internal Server Error");
    break;
  default:
    console.log("Unknown status code");
}

