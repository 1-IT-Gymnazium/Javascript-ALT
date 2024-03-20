//Function

//function functionName(parameter1, parameter2) {
    //code to be executed
//}

function sum(a, b) {
    return a + b;
}

//calling function
console.log(sum(1, 2));

function product(a= 1, b = 1) {
    return a * b;
}

console.log(product());

//local and global variables

//local

function getCircleArea(radius) {
    const PI = 3.1415; //local variable
    let area = PI * radius * radius;
    return area;
}

console.log(getCircleArea(1));
console.log(PI); //error

//global

let PI = 3.1415; //global variable

function getCircleArea2(radius) {
    PI = 3.14;
    return PI * radius ** 2;
}

console.log(getCircleArea2(1));
console.log(PI);