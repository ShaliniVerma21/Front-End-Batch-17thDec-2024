//EcmaScript Version 6 Features

//=====================================
// 1. let and const
//=====================================
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Outputs: 20
}
console.log(x); // 10


//Const
const PI = 3.14;
//PI = 3.15; // Error: Assignment to constant variable.
console.log(PI); // Outputs: 3.14
//=====================================

// 2. Arrow Functions
//=====================================

//traditional function to add two numbers
function add(a, b) {
    return a + b;
};

console.log(add(2, 3));

//arrow function-1 to add two numbers
const add1 = (a, b) => {
    return a + b;
};
console.log(add1(2, 3)); // Outputs: 5

//arrow function-2 (parameterized)
const add2 = (a, b) => a + b;
console.log(add2(2, 3)); // Outputs: 5

//arrow function-3 (non-parameterized)
const printHello = () => console.log("Hello Guys");
printHello(); // Outputs: Hello Guys

//arrow function-4
// with multiple statements
const greet = (name) => {
    console.log(`Hello ${name}`);//template literals
    console.log(`Hi ${name}`);
    console.log("How are you?");
}

greet("Kajal");

//arrow function-5
// with default parameters
const greet2 = (name = "Kajal") => {
    console.log(`Hello ${name}`);
    console.log(`Hi ${name}`);
    console.log("How are you?");
}

greet2("Priyanka");

//==================================================
// 3. Destructuring
//==================================================

//Array Destructuring -1 Numbers array
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = numbers;
console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(third); // Outputs: 3

//Array Destructuring -2 String Array
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); // Outputs: Apple
console.log(secondFruit); // Outputs: Banana

//Object Destructuring-1
const person = {
    name: "Kajal",
    age: 25,
    occupation: "Software Engineer"
};
const { name, age, occupation } = person;
console.log(name); // Outputs: Kajal
console.log(age); // Outputs: 25
console.log(occupation); // Outputs: Software Engineer

//Object Destructuring-2
const person2 = {
    name: "Priyanka",
    age: 25,
    occupation: "Software Engineer"
};
const { name: name2, age: age2, occupation: occupation2 } = person2
console.log(name2); // Outputs: Priyanka
console.log(age2); // Outputs: 25
console.log(occupation2); // Outputs: Software Engineer


//====================================================
// 4. Default Parameter
//====================================================

// Default Parameter -1
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Outputs: Hello, Guest!

