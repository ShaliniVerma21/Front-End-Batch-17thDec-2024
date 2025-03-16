//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let j = 0;
while (j < arr.length) {
  if (arr[j] === target) {
    console.log(`Found ${target} at index ${j}`);
    break;
  }
  j++;
}



//do while loop
let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 < 5);

//coin flip
let flip;
do {
  flip = Math.random() < 0.5? "Heads" : "Tails";
  console.log(`You got: ${flip}`);
} while (flip === "Heads");




//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//fruits
let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


//break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }

  //for in loop
  const person1 = { name: 'John', age: 30, occupation: 'Developer' };
  for (let prop in person1) {
    console.log(`${prop}: ${person1[prop]}`);
  }


  const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  };
  
  const person = { name: 'John', age: 30, address: address };
  
  for (let prop in person) {
    if (typeof person[prop] === 'object') {
      for (let subProp in person[prop]) {
        console.log(`${prop}.${subProp}: ${person[prop][subProp]}`);
      }
    } else {
      console.log(`${prop}: ${person[prop]}`);
    }
  }



  //for of loop
  const fruitss = ['apple', 'banana', 'cherry'];
  for (let fruit of fruitss) {
    console.log(fruit);
  }


  const numbers = [1, 2, 3, 4, 5];
  for (let num of numbers) {
    console.log(num * 2);
  }