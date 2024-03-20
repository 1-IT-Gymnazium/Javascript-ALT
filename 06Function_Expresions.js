//function
// 1. way function declaration

function sum(a,b){
    return a + b
}

console.log(sum(1,-1))

// 2. way function expression

let sum2 = function(a,b){
    return a + b
}

console.log(sum2(1,2))

//printMe = console.log
//printMe('Hello')

function ask(question,yes,no){
    console.log(question)
   if (age >= 18){
       yes()
   } else {
       no()
   }
}

function showOk(){
    console.log('OK')
}

function showCancel(){
    console.log('Cancel')
}

let age = 17
ask('Are you 18?', showOk, showCancel)

//arrow function

let sum3 = (a,b) => a + b

console.log(sum3(1,2))