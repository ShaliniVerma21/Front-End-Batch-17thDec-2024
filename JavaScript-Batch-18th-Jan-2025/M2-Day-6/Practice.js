//EcmaScript Version 6 Features

//=====================================
// 1. let and const
//=====================================

// Using let
let x = 10;
if (true) {
    let x = 20; // Block-scoped variable
    console.log(x); // Outputs: 20
}
console.log(x); // Outputs: 10

// Using const
const PI = 3.14;
// PI = 3.15; // Error: Assignment to constant variable.
console.log(PI); // Outputs: 3.14

// Real-world example: Using const for configuration
const CONFIG = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
console.log(`API URL: ${CONFIG.apiUrl}`); // Outputs: API URL: https://api.example.com

//=====================================
// 2. Arrow Functions
//=====================================

// Traditional function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Outputs: 5

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // Outputs: 5

// Real-world example: Using arrow functions for callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

//==================================================
// 3. Destructuring
//==================================================

// Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // Outputs: red
console.log(secondColor); // Outputs: green

// Real-world example: Destructuring in function parameters
function displayColors([color1, color2]) {
    console.log(`Color 1: ${color1}, Color 2: ${color2}`);
}
displayColors(colors); // Outputs: Color 1: red, Color 2: green

// Object Destructuring
const user = {
    username: "john_doe",
    email: "john@example.com",
    age: 30
};
const { username, email } = user;
console.log(username); // Outputs: john_doe
console.log(email); // Outputs: john@example.com

//====================================================
// 4. Default Parameters
//====================================================

// Default Parameter - 1
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Outputs: Hello, Guest!
greet("Alice"); // Outputs: Hello, Alice!

// Real-world example: Default parameters in a configuration function
function setup(config = { theme: "light", language: "en" }) {
    console.log(`Theme: ${config.theme}, Language: ${config.language}`);
}
setup(); // Outputs: Theme: light, Language: en
setup({ theme: "dark" }); // Outputs: Theme: dark, Language: en

//====================================================
// 5. Template Literals
//====================================================

const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Outputs: Hello, my name is Alice and I am 25 years old.

// Real-world example: Using template literals for multi-line strings
const message = `Dear ${name},

Thank you for your purchase!

Best regards,
The Team`;
console.log(message);

//====================================================
// 6. Enhanced Object Literals
//====================================================

const name = "Bob";
const age = 28;

// Using shorthand property names
const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person); // Outputs: { name: 'Bob', age: 28, greet: [Function: greet] }
person.greet(); // Outputs: Hello, my name is Bob

// Real-world example: Creating a configuration object
const apiConfig = {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    getFullUrl () {
        return `${this.baseUrl}/endpoint`;
    }
};

console.log(apiConfig.getFullUrl()); // Outputs: https://api.example.com/endpoint

//====================================================
// 7. Promises
//====================================================

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data); // Simulating successful data fetch
        }, 2000);
    });
};

fetchData("https://api.example.com/data")
    .then(response => {
        console.log(response.message); // Outputs: Data fetched successfully!
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Real-world example: Chaining promises for sequential operations
fetchData("https://api.example.com/data")
    .then(response => {
        console.log(response.message);
        return fetchData("https://api.example.com/another-data");
    })
    .then(anotherResponse => {
        console.log(anotherResponse.message);
    });


//====================================================
// 8. Classes
//====================================================

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Outputs: Rex barks.

// Real-world example: Creating a class for a user
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}

const user1 = new User("john_doe", "john@example.com");
user1.displayInfo(); // Outputs: Username: john_doe, Email: john@example.com


//====================================================
// 9. Modules
//====================================================

// Exporting a function from a module
export const add = (a, b) => a + b;

// Importing the function in another file
import { add } from './math.js';
console.log(add(5, 3)); // Outputs: 8

// Real-world example: Organizing code into modules
// In a file named user.js
export class User {
    constructor(name) {
        this.name = name;
    }
}

// In another file
import { User } from './user.js';
const user = new User("Alice");
console.log(user.name); // Outputs: Alice


//====================================================
// 10. Spread Operator
//====================================================

// Using spread operator to combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]

// Real-world example: Cloning an object
const original = { name: "Alice", age: 25 };
const clone = { ...original, city: "New York" };
console.log(clone); // Outputs: { name: 'Alice', age: 25, city: 'New York' }


//====================================================
// 11. Rest Parameters
//====================================================

// Using rest parameters to handle variable number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

// Real-world example: Collecting arguments in a function
function logMessages(...messages) {
    messages.forEach(msg => console.log(msg));
}
logMessages("Error: Not found", "Warning: Low disk space"); 
// Outputs: 
// Error: Not found
// Warning: Low disk space


//====================================================
// 12. Map and Set
//====================================================

// Using Map to store key-value pairs
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map.get("name")); // Outputs: Alice

// Real-world example: Using Map for configuration settings
const configMap = new Map([
    ["apiUrl", "https://api.example.com"],
    ["timeout", 5000]
]);
console.log(configMap.get("apiUrl")); // Outputs: https://api.example.com

// Using Set to store unique values
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Outputs: Set { 1, 2, 3, 4 }

// Real-world example: Using Set to track unique user IDs
const userIds = new Set();
userIds.add(1);
userIds.add(2);
userIds.add(1); // Duplicate, will not be added
console.log(userIds); // Outputs: Set { 1, 2 }


//====================================================
// 13. Iterators and Generators
//====================================================

// Creating a generator function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generator = idGenerator();
console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2

// Real-world example: Using a generator to create a sequence
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // Outputs: 0
console.log(fib.next().value); // Outputs: 1
console.log(fib.next().value); // Outputs: 1
console.log(fib.next().value); // Outputs: 2


//====================================================
// 14. Symbol
//====================================================

// Creating a unique symbol
const uniqueId = Symbol("id");
const user = {
    [uniqueId]: 12345,
    name: "Alice"
};

console.log(user[uniqueId]); // Outputs: 12345

// Real-world example: Using symbols to create private properties
const privateId = Symbol("privateId");
class User {
    constructor(name) {
        this.name = name;
        this[privateId] = Math.random();
    }

    getId() {
        return this[privateId];
    }
}

const user1 = new User("Bob");
console.log(user1.getId()); // Outputs a unique ID


//====================================================
// 15. for...of and for...in loops
//====================================================

// Using for...of to iterate over iterable objects
const array = [1, 2, 3];
for (const value of array) {
    console.log(value); // Outputs: 1, 2, 3
}

// Real-world example: Iter ating over a string
const str = "Hello";
for (const char of str) {
    console.log(char); // Outputs: H, e, l, l, o
}

// Using for...in to iterate over object properties
const person = { name: "Alice", age: 25 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 25
}

// Real-world example: Iterating over an object's properties
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
for (const property in car) {
    console.log(`${property}: ${car[property]}`); // Outputs: make: Toyota, model: Camry, year: 2020
}


//====================================================
// 16. Array.from()
//====================================================

// Creating an array from a string
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // Outputs: ['H', 'e', 'l', 'l', 'o']

// Real-world example: Converting a NodeList to an array
const listItems = document.querySelectorAll("li");
const itemsArray = Array.from(listItems);
console.log(itemsArray); // Outputs: Array of <li> elements


//====================================================
// 17. Array.prototype.includes()
//====================================================

// Checking if an array includes a certain value
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // Outputs: true
console.log(fruits.includes("grape")); // Outputs: false

// Real-world example: Validating user input
const allowedColors = ["red", "green", "blue"];
const userColor = "yellow";
if (allowedColors.includes(userColor)) {
    console.log("Color is allowed.");
} else {
    console.log("Color is not allowed."); // Outputs: Color is not allowed.
}


//====================================================
// 18. Object.assign()
//====================================================

// Merging two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // Outputs: { a: 1, b: 3, c: 4 }

// Real-world example: Cloning an object
const original = { name: "Alice", age: 25 };
const clone = Object.assign({}, original);
console.log(clone); // Outputs: { name: 'Alice', age: 25 }


//====================================================
// 19. Object.entries() and Object.values()
//====================================================

// Using Object.entries() to get key-value pairs
const user = { name: "Alice", age: 25 };
const entries = Object.entries(user);
console.log(entries); // Outputs: [['name', 'Alice'], ['age', 25]]

// Real-world example: Iterating over an object's properties
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`); // Outputs: name: Alice, age: 25
}

// Using Object.values() to get values of an object
const values = Object.values(user);
console.log(values); // Outputs: ['Alice', 25]


//====================================================
// 20. Promise.all()
//====================================================

// Using Promise.all to handle multiple promises
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Outputs: [3, 42, 'foo']
    });

// Real-world example: Fetching multiple resources
const fetchUser  = () => Promise.resolve({ name: "Alice" });
const fetchPosts = () => Promise.resolve([{ title: "Post 1" }, { title: "Post 2" }]);

Promise.all([fetchUser (), fetchPosts()])
    .then(([user, posts]) => {
        console.log(user, posts);
    });


//====================================================
// 21. Array.prototype.find()
//====================================================

// Finding an element in an array
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log(user); // Outputs: { id: 2, name: 'Bob' }

// Real-world example: Finding a product by ID
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
];

const product = products.find(p => p.id === 3);
console.log(product); // Outputs: { id: 3, name: 'Tablet' }


//====================================================
// 22. Array.prototype.fill()
//====================================================

// Filling an array with a static value
const array = new Array(5).fill(0);
console.log(array); // Outputs: [ 0, 0, 0, 0, 0]

// Real-world example: Creating a default grid
const grid = Array(3).fill().map(() => Array(3).fill(null));
console.log(grid); // Outputs: [[null, null, null], [null, null, null], [null, null, null]]


//====================================================
// 23. Array.prototype.flat()
//====================================================

// Flattening a nested array
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Outputs: [1, 2, 3, 4, 5, 6]

// Real-world example: Flattening user input
const userInput = [["Alice", "Bob"], ["Charlie", "David"]];
const flatInput = userInput.flat();
console.log(flatInput); // Outputs: ['Alice', 'Bob', 'Charlie', 'David']


//====================================================
// 24. Array.prototype.sort()
//====================================================

// Sorting an array of numbers
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]

// Real-world example: Sorting an array of objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

users.sort((a, b) => a.age - b.age);
console.log(users); // Outputs: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]


//====================================================
// 25. Array.prototype.reduce()
//====================================================

// Using reduce to sum an array of numbers
const total = [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0);
console.log(total); // Outputs: 15

// Real-world example: Calculating total price of items
const cart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 },
    { item: "Tablet", price: 300 }
];

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // Outputs: 1800


