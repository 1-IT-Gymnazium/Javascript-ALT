//map

let obj = {
    "name": "John",
    "age": 30
}

//create a map
let map = new Map();

//settting key and value
map.set('name', 'John');
map.set(true, 'yes');

console.log(map); //Map(1){"name" => "John"}

//accessing the value (get)

console.log(map.get('name')); //John

console.log(map.name); //undefined
console.log(map['name']); //undefined

//testing of key (has)

console.log(map.has('name')); //true
console.log(map.has('time')); //false

map.set('time')
console.log(map)
console.log(map.has('time')); //true

//delete a key (delete)

map.delete('time');
console.log(map.has('time')); //false

//clear the map (clear)
map.clear();
console.log(map); //Map(0) {}

//size of the map (size)
console.log(map.size); //0
console.log(map.lenght); //undefined

//iterating the map
console.log(map.keys()); //MapIterator {"name"}
for (let key of map.keys()) {
    console.log(key);
}

//values
console.log(map.values()); //MapIterator {"John"}

//keys and values, both, entries
console.log(map.entries()); //MapIterator {"name" => "John"}
for (let entry of map.entries()) {
    console.log(entry);
    console.log(typeof entry)
}

for (let [key, value] of map.entries()) {
    console.log(key, value);
    console.log(typeof key, typeof value)
}

//alternative of creating from array
let numbers =new Map ([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])

console.log(numbers); //Map(3) {1 => "one", 2 => "two", 3 => "three"}

//in object
let obj2 = {
    "name": "John",
    "age": 30
}
//"I'm in space"

let WeatleyMap = new Map(Object.entries(obj2));

//create object from map
let SpaceMap = new Map()
    SpaceMap.set(true, 'yes')
    console.log(SpaceMap); //Map(1) {true => "yes"}

console.log(Object.fromEntries(SpaceMap)); //{true: "yes"}

//set
let set = new Set();
console.log(set); //Set(0) {}

//add value to set
set.add(1);
console.log(set); //Set(1) {1}

set.add(1)//result will be same

//verify the value
console.log(set.has(1)); //true
console.log(set.has(2)); //false//delete the value
set.delete(1);
console.log(set); //Set(0) {}

set.add(1);
set.add(2);
set.add(3);
console.log(set); //Set(3) {1, 2, 3}

//set.add([4, 5, 6]); //not possible
//console.log(set)

//bulk creation
let set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2); //Set(5) {1, 2, 3, 4, 5}

//joining set, intersection, difference, symmetric difference
let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([4, 5, 6, 7, 8]);

let union = A.Union(B);
console.log(union); //Set(8) {1, 2, 3, 4, 5, 6, 7, 8}

