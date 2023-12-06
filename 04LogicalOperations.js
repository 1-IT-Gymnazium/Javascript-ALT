//&& (AND) || (OR) ! (NOT)

//0 && 0 // 0   0 * 0 = 0
//0 && 1 // 0   0 * 1 = 0

//0 || 0 // 0   0 + 0 = 0
//0 || 1 // 1   0 + 1 = 1

//1 || 1 // 1   1 + 1 = 1
//1 && 1 // 1   1 * 1 = 1

// 1 = true
// 0 = false
//true && false // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true

let hour = 9;
if (hour < 10 || hour > 18) {
    console.log("The office is closed");
}
else {
    console.log("Office is open");
}
//use of OR
let value1
let value2 = 0
let value3 = "Hello"

console.log(value1 || value2 || value3); // Hello

//use of AND
let age = 18;
let HasDriverLicense = true;

if (age >= 18 && HasDriverLicense) {
    console.log("You legally can drive");
}
else {
    console.log("You legally cannot drive");
}

//use of NOT
console.log(!true); // false