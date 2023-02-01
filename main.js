//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// ???????????????????????
function p2(li){
    for (let key in li){
        console.log(key)
    };
}
console.log(p2(person3))
function p5(li){
    console.log(Object.values(li))
}
// ???????????????????????

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name,age){
    this.name = name
    this.age = age

    // method
    this.printInfo = () => {
        return `This persons name is ${name} and their age is ${age}`
    };
    this.addAge = function(age){
        age++
        return `${name} is now ${age}`
        }
}
const p = new Person('H', 3) 
console.log(p.printInfo())
const p1 = new Person('G', 22)
console.log(p1.printInfo())
console.log(p1.addAge())
console.log(p1.addAge())
console.log(p1.addAge())
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
var str = 'asdfsdfghjklkjhgfd'

function aPromise(x) {
    let pro = new Promise((resolve, reject)=>{
    
    if (x.length > 10) {
        resolve('Big Word')
    } else {
        reject('Small Number')
    }
    })
    pro.then((message)=> {
        console.log('This is in the then ' + message)
    }).catch((message)=> {
        console.log('This is in the catch ' + message)
    })
}

console.log(aPromise(str))
