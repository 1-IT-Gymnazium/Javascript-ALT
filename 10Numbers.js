// Ask the visitor for two numbers and display their sum
let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
alert(`The sum is: ${num1 + num2}`);

// Function to repeatedly ask for a number until a valid number is entered
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number:");
  } while (isNaN(num) && num !== null && num !== "");
  return +num;
}

// Function to generate a random decimal number between min and max (excluding max)
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Function to generate a random integer number between min and max (excluding max)
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}