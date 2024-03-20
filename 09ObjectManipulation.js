// Define two string variables and print them
let message = "hello world";
let phrase;
phrase = "whats up!!!";

console.log(message);
console.log(phrase);

// Define an object 'user' and assign it to 'admin'
// Change the 'name' property in 'admin' which also changes 'user' because they reference the same object
let user = { name: "User" };
let admin = user;
admin.name = "Admin";

console.log(user.name);
console.log(admin.name);

// Check if 'user' and 'admin' are the same (they are because they reference the same object)
console.log(user === admin);

// Create an object 'original' and clone it into 'clone'
// Change a property in 'clone' which does not affect 'original' because they are different objects
const original = {
    "statement": "Red Bull Racing is the best F1 team"
}

const clone = {
    ...original
}

clone.statement = "Mercedes is the worst F1 team";

console.log(original.statement);
console.log(clone.statement);

// Merge multiple objects into one
let person01 = {
    "name": "Daniel"
}
let job = {
    "job": "teacher"
}

let age = {
    "age": 32
}

let mergedperson = {
    ...person01, ...job, ...age
}

console.log(mergedperson);

// Define an object with methods
let user = {
    "name": "Daniel",
    "age": 32,
    // Method to print a greeting
    sayhello() {
        console.log("Hello");
    },
    // Method to get the 'age' property
    GetAge(){
        return this.age
    },
    // Method to return the object itself
    Show(){
        return this
    }
}

// Overwrite the 'sayhello' method to include the user's name in the greeting
user.sayhello = function(){
    console.log("hello "+ this.name)
}

// Call the methods and print the results
user.sayhello()
console.log(user.GetAge())
console.log(user.Show())