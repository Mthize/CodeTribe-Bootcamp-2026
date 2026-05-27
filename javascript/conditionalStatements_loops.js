// Exercise 1: Temperature Check using if/else
const temperature = 18;

console.log("Exercise 1: Temperature Check");

if (temperature < 0) {
  console.log("If/else result: It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("If/else result: It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("If/else result: It's mild.");
} else {
  console.log("If/else result: It's warm.");
}

// Exercise 1: Temperature Check using switch(true)
switch (true) {
  case temperature < 0:
    console.log("Switch result: It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("Switch result: It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("Switch result: It's mild.");
    break;
  default:
    console.log("Switch result: It's warm.");
}

console.log("");

// Exercise 2: Divisibility Check using if/else
const divisibilityNumber = 12;

console.log("Exercise 2: Divisibility Check");

if (divisibilityNumber % 2 === 0 && divisibilityNumber % 3 === 0) {
  console.log("If/else result: Divisible by both.");
} else if (divisibilityNumber % 2 === 0) {
  console.log("If/else result: Divisible by 2.");
} else if (divisibilityNumber % 3 === 0) {
  console.log("If/else result: Divisible by 3.");
} else {
  console.log("If/else result: Not divisible by 2 or 3.");
}

// Exercise 2: Divisibility Check using switch(true)
switch (true) {
  case divisibilityNumber % 2 === 0 && divisibilityNumber % 3 === 0:
    console.log("Switch result: Divisible by both.");
    break;
  case divisibilityNumber % 2 === 0:
    console.log("Switch result: Divisible by 2.");
    break;
  case divisibilityNumber % 3 === 0:
    console.log("Switch result: Divisible by 3.");
    break;
  default:
    console.log("Switch result: Not divisible by 2 or 3.");
}

console.log("");

// Exercise 3: For Loops - Print numbers from 1 to 10
console.log("Exercise 3: For Loops");
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 3: For Loops - Print all even numbers between 1 and 20
console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 3: For Loops - Calculate the sum of all numbers from 1 to 100
let forLoopSum = 0;
for (let i = 1; i <= 100; i++) {
  forLoopSum += i;
}
console.log("Sum of numbers from 1 to 100:", forLoopSum);

// Exercise 3: For Loops - Print each element in the array
const numbersArray = [1, 2, 3, 4, 5];
console.log("Elements in numbersArray:");
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Exercise 3: For Loops - Find the largest number in the list
const numbersList = [3, 7, 2, 5, 10, 6];
let largestNumber = numbersList[0];

for (let i = 1; i < numbersList.length; i++) {
  if (numbersList[i] > largestNumber) {
    largestNumber = numbersList[i];
  }
}

console.log("Largest number in numbersList:", largestNumber);
console.log("");

// Exercise 4: While Loops - Print numbers from 1 to 10
console.log("Exercise 4: While Loops");
let whileCounter = 1;

console.log("Numbers from 1 to 10:");
while (whileCounter <= 10) {
  console.log(whileCounter);
  whileCounter++;
}

// Exercise 4: While Loops - Print all even numbers between 1 and 20
let evenCounter = 1;
console.log("Even numbers between 1 and 20:");
while (evenCounter <= 20) {
  if (evenCounter % 2 === 0) {
    console.log(evenCounter);
  }
  evenCounter++;
}

// Exercise 4: While Loops - Calculate the sum of all numbers from 1 to 100
let whileSumCounter = 1;
let whileLoopSum = 0;

while (whileSumCounter <= 100) {
  whileLoopSum += whileSumCounter;
  whileSumCounter++;
}

console.log("Sum of numbers from 1 to 100:", whileLoopSum);

// Exercise 4: While Loops - Print all multiples of 5 less than 50
let multipleOfFive = 5;
console.log("Multiples of 5 less than 50:");
while (multipleOfFive < 50) {
  console.log(multipleOfFive);
  multipleOfFive += 5;
}

console.log("");

// Exercise 5: Do While Loops - Print numbers from 1 to 10
console.log("Exercise 5: Do While Loops");
let doWhileCounter = 1;

console.log("Numbers from 1 to 10:");
do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 10);

// Exercise 5: Do While Loops - Calculate the sum of all numbers from 1 to 100
let doWhileSumCounter = 1;
let doWhileSum = 0;

do {
  doWhileSum += doWhileSumCounter;
  doWhileSumCounter++;
} while (doWhileSumCounter <= 100);

console.log("Sum of numbers from 1 to 100:", doWhileSum);

// Exercise 5: Do While Loops - prompt() example for a number greater than 10
// The code below is commented out because prompt() does not work directly in Node.js.
/*
let userNumber;

do {
  userNumber = prompt("Enter a number greater than 10:");
} while (Number(userNumber) <= 10);

console.log("You entered:", userNumber);
*/

// Exercise 5: Do While Loops - Node.js-friendly version using a fixed value
let userNumber = 12;

do {
  console.log("Checking number:", userNumber);
} while (userNumber <= 10);

console.log("Node.js-friendly result: The number is greater than 10.");

// Exercise 5: Do While Loops - Node.js readline guessing game
// readline lets the user type input in the terminal when using Node.js.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = 7;

function askGuess() {
  rl.question("Guess a number between 1 and 10: ", function (answer) {
    const guess = Number(answer);

    if (guess === secretNumber) {
      console.log("Correct guess!");
      rl.close();
    } else if (guess < secretNumber) {
      console.log("Too low, try again.");
      askGuess();
    } else if (guess > secretNumber) {
      console.log("Too high, try again.");
      askGuess();
    } else {
      console.log("Please enter a valid number.");
      askGuess();
    }
  });
}

askGuess();
