//Control Statements
 
//1. Decision Making
//if else statement

let age = 27;
if(age > 18) {
    console.log("you are eligible for voting");
}
else
{
    console.log("you are under 18, so not eligible for voting");
}

let x=5;
let y=10;
if(x > y) {
  console.log("x is greater than y");
}
else
{
    console.log("x is less than y");
}

//if-else-if (when we have multiple conditions to validate)
let score=75;

if(score>=80)
{
    console.log('you scored Grade A');
}
else if(score>=70)
{
    console.log('you scored Grade B');
}
else if(score>=60)
{
    console.log('you scored Grade C');
}
else
{
    console.log('you are failed');
}

//switch statement
let day = 3;

switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 : 
         console.log("Saturday");
         break;
    case 7 :
        console.log("Sunday");
        break;
    default : 
       console.log("Invalid day");
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


//2. Loops : main purpose is to perform a specific task according to condition as - print 1 to 100 numbers
 
// 1----10 numbers
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

/*
For Loop: Best when the number of iterations is known.
While Loop: Best when the number of iterations is not known, and you want to continue until a condition is 
false.
Do...While Loop: Similar to the while loop but guarantees at least one execution.
For...of Loop: Best for iterating over iterable objects like arrays and strings.
For...in Loop: Best for iterating over the properties of an object.
*/

//Example-1 for loop (print 1 to 10 numbers)
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Example-2 while loop (print 1 to 10 numbers)

let j=1;
while(j<=10)
{
    console.log(j);
    j++;
}

//Example-3 do while loop (print 1 to 10 numbers)
let k=1;
do{
    console.log(k);
    k++;
}
while(k<=10);

//Example-4 for of loop (iterate over an array)
let fruits=['apple','banana','cherry','Kiwi','mango'];
for(let fruit of fruits)
{
    console.log(fruit);
}

//Example-5 for in loop (iterate over an object)
const student={
    name:'John',
    age:25,
    city:'New York'
};

for(let key in student)
{
    console.log(`${key} : ${student[key]}`);
}

// Javascript is an object based language