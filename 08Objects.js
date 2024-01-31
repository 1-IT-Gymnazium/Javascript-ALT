//creating objects

let User = new Object(); // don't use this
console.log(User);
let Student = {}; // use this
console.log(Student);

//creating object with properties
let Person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 20,
    sex: "Male",
};
console.log(Person);

//accessing object properties
console.log(Person.FirstName);

//adding pair key:value
Person.job = "Developer";
console.log(Person);

Person.FavoriteF1Team = "Red Bull Racing";

console.log(Person);

//accessing object properties
console.log(Person["FavoriteF1Team"]);

//dynamic key
let key = "Favorite color";
person[key] = "Turquoise";

console.log(Person[key]);

//deleting properties
delete Person["Favorite color"];
console.log(Person);

//testing of presence of properties (key)
console.log("FirstName" in Person); //true or false
console.log("Favorite color" in Person); //true or false

//iterating over object
//iterating over keys
for (let key in Person) {
    console.log(key);
}

//iterating over values
for (let key in Person) {
    console.log(Person[key]);
}

//iterating over pairs key:value
for (let key in Person) {
    console.log(key + ":" + Person[key]);
}