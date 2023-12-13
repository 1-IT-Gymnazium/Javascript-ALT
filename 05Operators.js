//Nullish coalesting operator
//Select first value that is not null or undefined

let a = "hello"
let b = "something"
let result = a ?? b
console.log(result)
let user
console.log(user??"anonymous user")

//Cperaison operators
let c = null
let d = "ahoj"

//When its working wrong
let cost = 0
let defaultCost = 100

if (cost === 0){
    console.log(cost)
}
else{
    console.log(cost|| defaultCost)
}
let text = ""
let defaultText = "Hello"
console.log(text||defaultText)