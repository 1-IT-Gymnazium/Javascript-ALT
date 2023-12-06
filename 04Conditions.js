//Condition
// if (condition) {
//     // code
// }

let year = 2005;
if (year == 2005) {
    console.log("You are 2000s kid");
}

if (""){
    console.log("Nothing")
} else {
    console.log("Something")
}
let age = 15;
if (age < 18) {
    console.log("You cannot drink alcohol");
} else if (age < 0) {
    console.log("Non valid age");
} else if (age > 120) {
    console.log("What planet are you from?");
} else {
    console.log("You can drink alcohol");
}

//dont do this
let age = ("What is your age?", 15);