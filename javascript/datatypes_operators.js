// Exercise 1: Numbers
const integerNumber = 15;
const floatingNumber = 4.5;

const additionResult = integerNumber + floatingNumber;
const subtractionResult = integerNumber - floatingNumber;
const multiplicationResult = integerNumber * floatingNumber;
const divisionResult = integerNumber / floatingNumber;
const modulusResult = integerNumber % 4;
const exponentiationResult = integerNumber ** 2;

console.log("Exercise 1: Numbers");
console.log("Integer number:", integerNumber);
console.log("Floating number:", floatingNumber);
console.log("Addition:", additionResult);
console.log("Subtraction:", subtractionResult);
console.log("Multiplication:", multiplicationResult);
console.log("Division:", divisionResult);
console.log("Modulus:", modulusResult);
console.log("Exponentiation:", exponentiationResult);
console.log("");

// Exercise 2: Boolean and Operators
const x = 8;
const y = 12;

console.log("Exercise 2: Boolean and Operators");
console.log("x is greater than y:", x > y);
console.log("x is less than or equal to y:", x <= y);
console.log("x is equal to y:", x === y);
console.log("x is not equal to y:", x !== y);
console.log("");

// Exercise 2: Logical Operators
const a = true;
const b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);
console.log("");

// Exercise 2: Assignment Operators
let p = 10;

console.log("Assignment operator results:");
p += 5;
console.log("After += 5:", p);

p -= 3;
console.log("After -= 3:", p);

p *= 2;
console.log("After *= 2:", p);

p /= 4;
console.log("After /= 4:", p);

p %= 3;
console.log("After %= 3:", p);
