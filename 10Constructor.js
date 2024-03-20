// Constructor function for User
function User(name) {
  // 'this' refers to the instance of the object
  this.name = name; // Assigns the 'name' parameter to the 'name' property of the object
  this.isAdmin = false; // Sets the 'isAdmin' property to false
}

// Create a new User object
let user = new User("Jack");

// Log the name and isAdmin properties of the user
console.log(user.name); // Outputs: Jack
console.log(user.isAdmin); // Outputs: false

// Constructor function with new.target
function User2(name) {
  // If the function was not called with 'new'
  if (!new.target) {
    // Call the function with 'new' and return the result
    return new User2(name);
  }

  // If the function was called with 'new', assign the 'name' parameter to the 'name' property of the object
  this.name = name;
}

// Call the User2 function without 'new'
let john = User2("John");

// Log the name property of john
console.log(john.name); // Outputs: John

// Constructor function with methods
function User3(name) {
  // Assign the 'name' parameter to the 'name' property of the object
  this.name = name;

  // Add a method 'sayHi' to the object
  this.sayHi = function() {
    // Log a greeting with the name of the user
    console.log("My name is: " + this.name);
  };
}

// Create a new User3 object
let john3 = new User3("John");

// Call the 'sayHi' method of the user
john3.sayHi(); // Outputs: My name is: John

// Constructor function for Calculator
function Calculator() {
  // Method to read two values from the user
  this.read = function() {
    this.a = +prompt('Enter first value:', 0);
    this.b = +prompt('Enter second value:', 0);
  };

  // Method to return the sum of the two values
  this.sum = function() {
    return this.a + this.b;
  };

  // Method to return the product of the two values
  this.mul = function() {
    return this.a * this.b;
  };
}

// Constructor function for Accumulator
function Accumulator(startingValue) {
  // Assign the 'startingValue' parameter to the 'value' property of the object
  this.value = startingValue;

  // Method to read a value from the user and add it to the 'value' property
  this.read = function() {
    this.value += +prompt('Enter a number:', 0);
  };
}

// Create a new Accumulator object with a starting value of 1
let accumulator = new Accumulator(1);

// Call the 'read' method of the accumulator twice
accumulator.read();
accumulator.read();

// Log the value property of the accumulator
console.log(accumulator.value); // Outputs: the sum of the two values entered by the user