//Single line comment

/*
Multiline
Comment
*/

//print message on console
console.log("Hello Students !! welcome to Javascript Class....");

//print message on a webpage
document.write("Hello Students !! welcome to Javascript Class....");

//What is Variables?
//Variables are used to store data in a program. They are used to store values that can be used later.

a=2;
b=3;
console.log(a+b); //output 5

myName = "Develearn";
console.log(myName); //output Develearn

document.write(myName);
document.write("<br>Hello Javascript<br>");

Hello = "\n Hello Students !! \n welcome to Javascript Class....<br>Hello";
document.write(Hello);

//display text on webpage within color
document.write("<font color='red'>Hello Students !! welcome to Javascript Class....</font><br>");
document.write("<font color='green'>Hello Students !! welcome to Javascript Class....</font><br>");
document.write("<font color='blue'>Hello Students !! welcome to Javascript Class....</font><br>");
document.write("<font color='yellow'>Hello Students !! welcome to Javascript Class....</font><br>");

//alert in javascript
alert("Hello Students !! welcome to Javascript Class....");
window.alert("Hey");
alert("Welcome to javascript Class-1");
window.alert('Welcome to javascript Class-2');

//user input
var name = prompt("Enter your name");
document.write("Hello, " + name + "<br>");
console.log(name);

//user input with default value
var name = prompt("Enter your name", "Develearn");
document.write("Hello, " + name + "<br>");
console.log(name);

//user input with default value and validation
var name = prompt("Enter your name", "Develearn");
if (name == "") {
    alert("Please enter your name");
    name = prompt("Enter your name", "Develearn");
} else {
    document.write("Hello, " + name + "<br>");
    console.log(name);
}

//user input with validation
var name = prompt("Enter your name");
if (name == "") {
    alert("Please enter your name");
    name = prompt("Enter your name");
} else {
    document.write("Hello, " + name + "<br>");
    console.log(name);
}

//variables
/*
In JavaScript, variables are used to store data values. 
They act as containers for data that can be referenced and manipulated throughout 
your code. Variables can hold different types of data, including strings, numbers, 
booleans, objects, arrays, and more.
*/
var name = "Develearn";
var age = 25;
var isMarried = true;
var isMarried = false;
console.log(isMarried);


//var, let & const (EcmaScript6)

/*
1. var
Scope: var is function-scoped or globally-scoped. 
If declared inside a function, it is accessible only within that function. 
If declared outside any function, it is accessible globally.
Redeclaration: Variables declared with var can be redeclared within the same scope 
without any error.

2. let
Scope: let is block-scoped, meaning it is only accessible within the block 
(enclosed by {}) in which it is defined. This includes loops, conditionals, 
and any other block.
Redeclaration: Variables declared with let cannot be redeclared in the same scope. 
Attempting to do so will result in a SyntaxError.

3. const
Scope: const is also block-scoped, similar to let.
Redeclaration: Variables declared with const cannot be redeclared or updated. 
They must be initialized at the time of declaration.
*/
var name = "Develearn";
let age1 = 25;
const isMarried1 = true;


//variables naming convention

/*
In JavaScript, following proper variable naming conventions is essential for writing clean, readable, 
and maintainable code. Here are some key conventions and best practices for naming variables:

- Javascript is a case-sensitive language(As- Age and age are different variables)
- The variable A and a are treated as two different variables
- Can consists of digits, underscore and alphabets
- Must begin with a letter or underscore character 
- Cannot begin with a number and cannot contain any punctuation marks
- Cannot contain any special characters like +, -, *, /
- Cannot contain spaces

*/
var name = "Develearn";
var name_ = "Develearn";
var $name = "Develearn";
var myName = "Develearn";//camel case
var My_name = "Develearn";
var _name = "Develearn";
var name123 = "Develearn";

//1. Descriptive Names: Use clear and descriptive names.
let userAge = 30; // Descriptive name
let a = 30; // Not descriptive

//2. Camel Case: Use camelCase for variable names.
let firstName1 = "John";
let lastName1 = "Doe";
let totalAmount = 100.50;

//3. Meaningful Abbreviations: Use abbreviations that are widely understood.
let numOfStudents = 25; // Meaningful abbreviation
let n = 25; // Not meaningful

//4. Avoid Reserved Keywords: Do not use JavaScript reserved keywords.
// let = 5; // Invalid
let score = 5; // Valid

//5. Uppercase for Constants: Use uppercase letters with underscores for constants.
const MAX_USERS = 100;
const PI = 3.14;

//6. Underscores for Readability: Optionally use underscores for readability.
let user_name = "Alice"; // Using underscores

//7. Avoid Single Character Names: Avoid single character names except for loop counters.
for (let i = 0; i < 10; i++) { // 'i' is acceptable as a loop counter
    console.log(i);
}
let x = 5; // Not recommended

//8. Plural Names for Arrays: Use plural names for arrays.
let students = ["Alice", "Bob", "Charlie"]; // Plural name for an array

//9. Verb-Noun Pairs for Functions: Use verb-noun pairs for function names.
function calculateTotal() {
    // Function to calculate total
}

//10. Consistency: Maintain consistency in naming conventions.


//Variables
let a1 = 20;
var b1 = 40;
const result = a1 + b1;
console.log(result);

//typeof function for variable type
console.log(typeof (result));

//var variables
var A = "name"; //create a variable
var A = "myname";//can redeclare a variable
A = "mynameis"; //can update value

//let B="name"; //create a variable
//let B="myname";//can not redeclare a variable
B = "mynameis"; //can update value

//const C="name"; //create a variable
//const C="myname";//can not redeclare a variable
C = "mynameis"; //can not update value


//Datatypes

/*
JavaScript supports several data types that can be categorized into primitive types 
and non-primitive types (objects). These data types allow developers to handle different kinds of data 
in their applications.
data types are the classifications of data that determine the kind of operations that can be performed on them. 
JavaScript is a dynamically typed language, meaning that variables can hold values of any type and can change 
types during execution.
*/

let firstName = "Roshni"; //string
let myAge = 16; //number
let isFollow = true; //boolean

//Dynamic types Variable(value can be changed dynamically)
let first = "One"; // it is string
first = 1; // now it's Number
console.log(typeof (first));


//1. Primitive Data Types
//Primitive data types are the most basic data types in JavaScript. 


// BigInt (ES11)
/*
A numeric type that can represent integers with arbitrary precision.
It is created by appending n to the end of an integer. 
*/
let xyz = BigInt("123456789012345678901234567890");//bigint

// Numbers:
let age = 25; // Integer
let price = 19.99; // Floating-point number

//Exponential Notation of a number
let num1 = 98e4;    // 980000
let num2 = 98e-4;   // 0.0098

// Strings:
let color = "Yellow";
let lastName = "Johnson";
let name = "Develearn"; // String
let greeting = 'Hello, World!'; // String
let templateLiteral = `Hello, ${name}`; // Template literal

// Symbol (ES6)
//A unique and immutable primitive value that can be used as the key of an object property.
let sym1 = Symbol("my symbol");
const uniqueId = Symbol('id'); // Symbol

// Booleans
let x1 = true;
let y = false;

//undefined
//indicates that a variable has not been assigned a value, or not declared at all.
let property = undefined;
let job = undefined;
let x2; // x2 is declared but not assigned
console.log(x2); // Output: undefined

//null
//often used to represent the absence of any object value.
let money = null;
let food = null;
let y1= null; // y1 is explicitly set to null

/*
 undefined means a variable has been declared but has not yet been assigned a value, 
 whereas null is an assignment value, meaning that a variable has been declared and 
 given the value of null .
*/


//2. Reference Data Types
//Reference data types are more complex and include objects, arrays, and functions.

/*a. Object
A collection of key-value pairs. Objects can hold multiple values and can be created using object 
literals or the new Object() syntax.*/

//1. Person Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    email: "john.doe@example.com"
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30

//2. Product Object
const product = {
    name: "Laptop",
    brand: "Dell",
    price: 799.99,
    inStock: true
};

// Accessing properties
console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 799.99

// 3. Book Object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction"
};

// Accessing properties
console.log(book.title); // Output: To Kill a Mockingbird
console.log(book.author); // Output: Harper Lee

// 4. Car Object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue"
};

// Accessing properties
console.log(car.make); // Output: Toyota
console.log(car.year); // Output: 2021

// 5. Animal Object
const animal = {
    species: "Dog",
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever"
};

// Accessing properties
console.log(animal.name); // Output: Buddy
console.log(animal.breed); // Output: Golden Retriever

//6. Movie Object
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction"
};

// Accessing properties
console.log(movie.title); // Output: Inception
console.log(movie.director); // Output: Christopher Nolan

//7. Recipe Object
const recipe = {
    name: "Pancakes",
    servings: 4,
    ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
    instructions: "Mix all ingredients and cook on a hot griddle."
};

// Accessing properties
console.log(recipe.name); // Output: Pancakes
console.log(recipe.ingredients); // Output: ["Flour", "Milk", "Eggs", "Sugar"]


/*
b. Array or Array Objects
A special type of object that holds an ordered list of values. Arrays can hold values of any type.
*/

//1. Simple Array of Fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry

//2. Array of Numbers
const numbers = [10, 20, 30, 40, 50];
// Accessing elements
console.log(numbers[1]); // Output: 20
console.log(numbers.length); // Output: 5 (number of elements in the array)

//3. Array of Objects
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Accessing properties of objects in the array
console.log(people[0].name); // Output: Alice
console.log(people[1].age); // Output: 30

//4. Array of Mixed Data Types
const mixedArray = [42, "Hello", true, null, { key: "value" }, [1, 2, 3]];
// Accessing elements
console.log(mixedArray[1]); // Output: Hello
console.log(mixedArray[4].key); // Output: value
console.log(mixedArray[5][1]); // Output: 2 (accessing nested array)


/*
c. Function
A block of code designed to perform a particular task. Functions are also objects in JavaScript.
*/

function greet(name) {
    return `Hello, ${name}!`;
}

// Date object:

//Creating a Date Object with a Specific Date
const specificDate = new Date("2024-07-01");
console.log(specificDate); // Output: Mon Jul 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

//Creating a Date Object with the Current Date and Time
const currentDate = new Date();
console.log(currentDate); // Output: Current date and time

//Creating a Date Object with Year, Month, Day, Hour, Minute, Second, and Millisecond
const detailedDate = new Date(2024, 6, 1, 12, 30, 0); // Note: Month is 0-indexed (0 = January, 6 = July)
console.log(detailedDate); // Output: Mon Jul 01 2024 12:30:00 GMT+0000 (Coordinated Universal Time)

//Creating a Date Object from a Timestamp
const timestampDate = new Date(1712092800000); // Timestamp in milliseconds
console.log(timestampDate); // Output: Date corresponding to the timestamp

//Getting the Current Year, Month, Day, etc
const now = new Date();
console.log(now.getFullYear()); // Output: Current year (e.g., 2024)
console.log(now.getMonth()); // Output: Current month (0-11, where 0 = January)
console.log(now.getDate()); // Output: Current day of the month (1-31)
console.log(now.getHours()); // Output: Current hour (0-23)
console.log(now.getMinutes()); // Output: Current minutes (0-59)
console.log(now.getSeconds()); // Output: Current seconds (0-59)

//Setting Year, Month, Day, etc
const dateToModify = new Date("2024-07-01");
dateToModify.setFullYear(2025);
dateToModify.setMonth(11); // December
dateToModify.setDate(25);
console.log(dateToModify); // Output: Fri Dec 25 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

//Converting Date to String
const dateString = specificDate.toString();
console.log(dateString); // Output: Mon Jul 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

//Converting Date to Locale String
const localeString = specificDate.toLocaleString();
console.log(localeString); // Output: Locale-specific date and time string

//Converting Date to ISO String
const isoString = specificDate.toISOString();
console.log(isoString); // Output: 2024-07-01T00:00:00.000Z

//Calculating the Difference Between Two Dates
const startDate = new Date("2024-01-01");
const endDate = new Date("2024-07-01");
const differenceInTime = endDate - startDate; // Difference in milliseconds
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
console.log(differenceInDays); // Output: 181 (days)

//Adding Days to a Date
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
const newDate = addDays(specificDate, 10); // Add 10 days
console.log(newDate); // Output: Thu Jul 11 2024 00:00:00 GMT+0000 (Coordinated Universal Time)


//Function to Get the Current Date in a Specific Format
function getFormattedDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day : 'numeric' };
    return now.toLocaleDateString(undefined, options); // e.g., "July 1, 2024"
}
console.log(getFormattedDate()); // Output: Current date in "Month Day, Year" format