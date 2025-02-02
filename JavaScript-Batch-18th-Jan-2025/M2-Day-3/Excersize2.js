
// Define the user object with properties age and country
const user = {
    age: 20, // Example age
    country: "India" // Example country
};

//1. If Statement
//Example: Check if a user is eligible to vote.
if (user.age >= 18 && user.country === "USA") {
    console.log("User is eligible to vote.");
}


//2. If-Else Statement
//Example: Determine if a number is even or odd.
let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//1. User Login Validation
const isLoggedIn = true; // Change to false to test the else case

if (isLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}


//2. Checking for a Valid Password
const password = "mypassword"; // Change this value to test different passwords
const minLength = 8;

if (password.length >= minLength) {
    console.log("Password is valid.");
} else {
    console.log("Password is too short. It must be at least 8 characters long.");
}


//3. If-Else-If Statement
// Define an age variable
const age = 25;

// Determine the age group
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}


// 1. Temperature Conversion
const celsius = 30;
let fahrenheit;

if (celsius < 0) {
    console.log("It's freezing!");
} else if (celsius >= 0 && celsius < 20) {
    fahrenheit = (celsius * 9/5) + 32;
    console.log(`It's cold. ${celsius}°C is ${fahrenheit}°F.`);
} else if (celsius >= 20 && celsius < 30) {
    fahrenheit = (celsius * 9/5) + 32;
    console.log(`It's warm. ${celsius}°C is ${fahrenheit}°F.`);
} else {
    fahrenheit = (celsius * 9/5) + 32;
    console.log(`It's hot! ${celsius}°C is ${fahrenheit}°F.`);
}


//2. Movie Rating System
const viewerAge = 16;
let movieRating;

if (viewerAge < 13) {
    movieRating = "G (General Audience)";
} else if (viewerAge >= 13 && viewerAge < 17) {
    movieRating = "PG-13 (Parents Strongly Cautioned)";
} else if (viewerAge >= 17 && viewerAge < 21) {
    movieRating = "R (Restricted)";
} else {
    movieRating = "NC-17 (Adults Only)";
}

console.log(`The movie rating for the viewer is: ${movieRating}`);

//3. Shipping Cost Calculation
const packageWeight = 12; // in pounds
let shippingCost;

if (packageWeight <= 5) {
    shippingCost = 5.00; // Flat rate for light packages
} else if (packageWeight > 5 && packageWeight <= 10) {
    shippingCost = 10.00; // Flat rate for medium packages
} else if (packageWeight > 10 && packageWeight <= 20) {
    shippingCost = 15.00; // Flat rate for heavy packages
} else {
    shippingCost = 25.00; // Oversized package
}

console.log(`The shipping cost is: $${shippingCost}`);


//4. Nested If-Else Statement

//1. Student Grading System
const score = 85;
const assignmentsCompleted = true;

if (score >= 60) {
    if (assignmentsCompleted) {
        console.log("Grade: Pass");
    } else {
        console.log("Grade: Conditional Pass (Assignments not completed)");
    }
} else {
    console.log("Grade: Fail");
}

//2. Bank Loan Eligibility
const creditScore = 720;
const annualIncome = 50000;

if (creditScore >= 700) {
    if (annualIncome >= 30000) {
        console.log("Eligible for a loan.");
    } else {
        console.log("Not eligible for a loan: Income too low.");
    }
} else {
    console.log("Not eligible for a loan: Credit score too low.");
}


//3. E-commerce Discount System
const membershipStatus = "gold"; // options: "gold", "silver", "none"
const totalPurchase = 150;

if (membershipStatus === "gold") {
    if (totalPurchase > 100) {
        console.log("Discount: 20%");
    } else {
        console.log("Discount: 10%");
    }
} else if (membershipStatus === "silver") {
    if (totalPurchase > 100) {
        console.log("Discount: 15%");
    } else {
        console.log("Discount: 5%");
    }
} else {
    console.log("No discount available.");
}


//4. Check if a person is eligible for a senior citizen discount.
age = 65;
let isSeniorCitizen = true;

if (age >= 60) {
    if (isSeniorCitizen) {
        console.log("You are eligible for a senior citizen discount.");
    } else {
        console.log("You are not eligible for a senior citizen discount.");
    }
} else {
    console.log("You are not eligible for a senior citizen discount.");
}


//5. Job Application Status
const hasDegree = true;
const interviewScore = 85;

if (hasDegree) {
    if (interviewScore >= 80) {
        console.log("Application Status: Hired");
    } else {
        console.log("Application Status: Considered for other positions.");
    }
} else {
    console.log("Application Status: Not qualified (Degree required).");
}


//5. Switch Statement

//1. Traffic Light System
const trafficLight = "green";

switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle.");
        break;
    case "yellow":
        console.log("Prepare to stop.");
        break;
    case "green":
        console.log("Go.");
        break;
    default:
        console.log("Invalid traffic light color.");
}


//2. Menu Selection in a Restaurant
const menuOption = 2;

switch (menuOption) {
    case 1:
        console.log("You selected Pizza.");
        break;
    case 2:
        console.log("You selected Pasta.");
        break;
    case 3:
        console.log("You selected Salad.");
        break;
    default:
        console.log("Invalid menu option.");
}


//3. User Role Management
const userRole = "editor";

switch (userRole) {
    case "admin":
        console.log("Access granted: Full access.");
        break;
    case "editor":
        console.log("Access granted: Edit content.");
        break;
    case "viewer":
        console.log("Access granted: View content.");
        break;
    default:
        console.log("Access denied: Unknown role.");
}





// Loops 

//1. While loop

//1. Counting Down from 10
let count = 10;

while (count > 0) {
    console.log(count);
    count--; // Decrement the count
}

console.log("Countdown complete!");


//2. User Input Validation
let myPassword;
const validPassword = "securePassword123";

while (myPassword !== validPassword) {
    myPassword = prompt("Please enter your password:");
}

console.log("Access granted!");


//3. Sum of Positive Numbers
let sum = 0;
let myNumber;

while (true) {
    myNumber = parseInt(prompt("Enter a positive number (or a negative number to stop):"));
    
    if (myNumber < 0) {
        break; // Exit the loop if a negative number is entered
    }
    
    sum += myNumber; // Add the number to the sum
}

console.log(`The total sum of positive numbers is: ${sum}`);


//2. For Loop

//1. Calculating the Sum of an Array
const numbers = [10, 20, 30, 40, 50];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Add each number to the sum
}

console.log(`The total sum is: ${sum}`);


//2. Generating a Multiplication Table
number = 5; // Change this value for a different multiplication table

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

//3. Counting Down with a For Loop
console.log("Countdown:");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("Countdown complete!");



//3. Do While Loop

//1. Calculating Factorial
number = 5; // Change this value for a different factorial
let factorial = 1;
let i = 1;

do {
    factorial *= i; // Multiply the current factorial by i
    i++;
} while (i <= number);

console.log(`The factorial of ${number} is: ${factorial}`);


//2. Menu Selection
let choice;

do {
    choice = prompt("Select an option:\n1. Option 1\n2. Option 2\n3. Exit");
    
    switch (choice) {
        case "1":
            console.log("You selected Option 1.");
            break;
        case "2":
            console.log("You selected Option 2.");
            break;
        case "3":
            console.log("Exiting the menu.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== "3");


// 4. For...of Loop

//1. Calculating Average Marks of Students in a Class
const studentsMarks = [85, 90, 78, 92, 88]; // Marks of students
let totalMarks = 0;

for (const marks of studentsMarks) {
    totalMarks += marks; // Add each student's marks to the total
}

const averageMarks = totalMarks / studentsMarks.length;
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);


//2. Processing a List of Indian Festivals
const festivals = [
    { name: "Diwali", date: "November 12", significance: "Festival of Lights" },
    { name: "Holi", date: "March 8", significance: "Festival of Colors" },
    { name: "Eid", date: "May 3", significance: "Celebration of Breaking Fast" }
];

console.log("List of Indian Festivals:");
for (const festival of festivals) {
    console.log(`${festival.name} on ${festival.date}: ${festival.significance}`);
}


// 3. Summarizing Agricultural Produce
const crops = [
    { name: "Wheat", quantity: 5000 }, // Quantity in tons
    { name: "Rice", quantity: 3000 },
    { name: "Sugarcane", quantity: 2000 }
];

let totalQuantity = 0;

for (const crop of crops) {
    totalQuantity += crop.quantity; // Add each crop's quantity to the total
}

console.log(`Total Agricultural Produce: ${totalQuantity} tons`);


// 4. Counting Population in Different States
const statePopulation = [
    { state: "Maharashtra", population: 123000000 },
    { state: "Uttar Pradesh", population: 199000000 },
    { state: "Bihar", population: 104000000 }
];

let totalPopulation = 0;

for (const state of statePopulation) {
    totalPopulation += state.population; // Add each state's population to the total
}

console.log(`Total Population of Listed States: ${totalPopulation}`);


// 5. Generating a List of Government Schemes
const governmentSchemes = [
    { scheme: "PM Kisan", benefit: "Direct income support to farmers" },
    { scheme: "Ayushman Bharat", benefit: "Health insurance for the poor" },
    { scheme: "Swachh Bharat", benefit: "Cleanliness and sanitation drive" }
];

console.log("List of Government Schemes:");
for (const scheme of governmentSchemes) {
    console.log(`${scheme.scheme}: ${scheme.benefit}`);
}


//5. For...in Loop

//1. Displaying State Capitals
const stateCapitals = {
    Maharashtra: "Mumbai",
    UttarPradesh: "Lucknow",
    WestBengal: "Kolkata",
    TamilNadu: "Chennai",
    Karnataka: "Bengaluru"
};

console.log("Indian State Capitals:");
for (const state in stateCapitals) {
    console.log(`${state}: ${stateCapitals[state]}`);
}


//2. Counting Vowels in Indian Names
const names = {
    person1: "Aarav",
    person2: "Vivaan",
    person3: "Aditya",
    person4: "Sai",
    person5: "Anaya"
};

const vowels = "aeiouAEIOU";
let vowelCount = {};

for (const key in names) {
    let count = 0;
    for (const char of names[key]) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    vowelCount[key] = count; // Store the count of vowels for each name
}

console.log("Vowel Count in Names:", vowelCount);


//3. Calculating Total Marks of Students
const studentMarks = {
    "Rahul": 85,
    "Priya": 90,
    "Amit": 78,
    "Sneha": 88,
    "Ravi": 92
};

totalMarks = 0;

for (const student in studentMarks) {
    totalMarks += studentMarks[student]; // Add each student's marks to the total
}

console.log(`Total Marks of Students: ${totalMarks}`);


//4. Listing Indian Cuisines and Their Main Ingredients
const indianCuisines = {
    Biryani: "Rice, Meat, Spices",
    Dosa: "Rice, Lentils",
    PaneerTikka: "Paneer, Spices, Vegetables",
    ButterChicken: "Chicken, Butter, Cream",
    CholeBhature: "Chickpeas, Flour"
};

console.log("Popular Indian Cuisines and Their Main Ingredients:");
for (const dish in indianCuisines) {
    console.log(`${dish}: ${indianCuisines[dish]}`);
}


//5. Calculating Population Density of Indian States
const stateData = {
    Maharashtra: { population: 123000000, area: 307713 }, // in square km
    UttarPradesh: { population: 199000000, area: 243286 },
    WestBengal: { population: 91000000, area: 88752 },
    TamilNadu: { population: 72000000, area: 130058 },
    Karnataka: { population: 61000000, area: 191791 }
};

console.log("Population Density of Indian States (people per sq km):");
for (const state in stateData) {
    const density = stateData[state].population / stateData[state].area;
    console.log(`${state}: ${density.toFixed(2)} people/sq km`);
}