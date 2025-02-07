/*
Part 1: Declaring and Invoking Functions
*/
console.log("Step1: Declare a simple function in script.js\n\n");
function greet(name = "Mohammed") {
  return `Hello ${name}!`;
}
console.log("Step2: Invoke function!\n\n");
console.log(greet("Sami"));
console.log("\nBonus: Invoke function! with defult parameter!\n");
console.log(greet());
console.log("=============================================\n");
/*
Part 2: Working with Parameters and Returning Values
*/
console.log("Step 3: Create a function to add two numbers\n\n");

function addNumbers(num1, num2) {
  return num1 + num2;
}

let num1 = 7;
let num2 = 12;

console.log(`Sum of ${num1} and ${num2} is ${addNumbers(num1, num2)}.`);
num1 = 28;
num2 = 75;
console.log(`Sum of ${num1} and ${num2} is ${addNumbers(num1, num2)}.`);
console.log("=============================================\n");
/*
 Part 3: Function Scope
 */
console.log("Step 4: Local and Global Scope\n\n");
let x = 10;

function chnageValue() {
  x = 77777777;
}

console.log(`Value of x BEFORE calling the function changeValue is ${x}.`);
chnageValue();
console.log(`Value of x AFTER calling the function changeValue is ${x}.`);
console.log("=============================================\n");
/*
Part 4: Closures
*/

console.log("Step 5: Create a function with closure\n\n");

function outerFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = outerFunction();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
