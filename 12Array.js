//creating an array
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5); //not recommended

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits); // Apple, Orange, Plum

//access to the value
console.log(fruits[1]); // Orange

//change the value
fruits[2] = "Pear";

//delete the value
delete fruits[1]; // it will be undefined

console.log(typeof fruits[1]); // object

//length of the array
console.log(fruits.length); // 3

//access the last element
console.log(fruits[fruits.length - 1]); // Pear

//delete the last element
let lastline = fruits.pop(); // Pear
console.log(fruits); // Apple, Orange
console.log(lastline); // Pear

//add the element to the end
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

//add the element to the beginning
fruits.unshift("Apple");
console.log(fruits); // Apple, Apple, Orange, Pear

//iterate over the array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//second way to iterate
for (let fruit of fruits) {
  console.log(fruit);
}

//delete of the array
fruits.length = 2;
console.log(fruits); // Apple, Apple

//multidimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5
console.log(matrix[2][0]); // 7

//another way
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1); // from index 2 remove 1 element

//slice
let numbers2 = numbers.slice(0,2); // from index 0 to 2
console.log(numbers2); // 1, 2

//concat - merge arrays
let pet = ["cat", "dog", "parrot"];
let wild = ["lion", "tiger", "elephant"];
let all = pet.concat(wild);
console.log(all); // cat, dog, parrot, lion, tiger, elephant

//for each
all.forEach(function(item, index, array) {

  all.forEach(item => console.log(item));
});

//find
console.log(all.includes("cat")); // true
console.log(all.includes("monkey")); // false

//filter
let ThreeLetterAnimals = all.filter((animal) => animal.length === 3);
console.log(ThreeLetterAnimals); // cat, dog

//map - transform the array
let lengths = all.map((animal) => animal.length);
console.log(lengths); // 3, 3, 6, 4, 5, 8

//sort
all.sort();
console.log(all); // cat, dog, elephant, lion, parrot, tiger

//split
let sentence = "I am learning JavaScript";
let words = sentence.split(" ");
console.log(words); // I, am, learning, JavaScript

//join
let newSentence = words.join(" ");
console.log(newSentence); // I am learning JavaScript

