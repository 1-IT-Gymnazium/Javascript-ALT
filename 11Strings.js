//Strings
//UTF-16

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

//special characters
"\n" //new line
"\r" //carriage return
"\t" //tab
"\\" //backslash

//length of string

let text = 'Hello World\nHow are you?\tI am fine\rThank you.';
console.log(text.length);
//.length is a property of string that gives the length of the string

let phoneNumber = '+420 777 456 123';
console.log(phoneNumber[0]);

//Iterating

for (let char of phoneNumber) {
    console.log(char);
} //+ 4 2 0 7 7 7 4 5 6 1 2 3

//changing characters - strings are immutable

phoneNumber[0] = '3'; //error

console.log(phoneNumber); //+420 777 456 123

newPhoneNumber = phoneNumber.slice(0, 1) + '3' + phoneNumber.slice(2);

console.log(newPhoneNumber); //+320 777 456 123

//searching for string

let str = 'How are you? I am fine, thank you.';
console.log(str.indexOf('?')); //11
console.log(str.indexOf('-')); //-1
console.log(str.indexOf('?', 17)); //start position

//getting a substring
console.log(str.includes('you')) //true
console.log(str.startsWith('/')) //false

//searching from the end
console.log(str.lastIndexOf('you')); //8

//startsWith, endsWith, includes
console.log(str.startsWith('How')); //true
console.log(str.endsWith('you.')); //true
console.log(str.includes('fine')); //true

//slicing with negative indexes
console.log(str.slice(-6)); //thank you.
console.log(str.slice(-6, -1)); //thank you

//subst, substring, but I input the length
let greeting = 'Hello, World!';
console.log(greeting.substr(0, 5)); //Hello

//comparison
console.log('a' > 'A'); //true
console.log('a' > 'B'); //false
console.log('a' > 'Z'); //true

//changing the case
console.log('Hello'.toUpperCase()); //HELLO
console.log('Hello'.toLowerCase()); //hello
console.log('a'.toLowerCase() <'c'.toUpperCase()); //true

