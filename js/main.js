console.log("Js File linked!")

const region = "Canada"
const province = "Ontario"

if (region === "Canada" && province === "Ontario") {
    console.log("You are seeing Canadian version")
}

let price = 20
const shippingFee = 15
let cartTotal

if (price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}

console.log(cartTotal)

document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal

// re-set the price
price = 105
const discount = 0.15

if (price >= 100) {
    cartTotal = price - (price * discount)
} else if (price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
console.log(cartTotal)
document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

// Switch
let planet = "Saturn"
let message 

switch (planet) {
    case "Earth":
        message = "Welcome to the third planet!"
        break;
    
    case "Mars":
        message = "Welcome to the red planet!"
        break;

    case "Jupiter":
        message = "Welcome to the largest planet!"
        break;

    default:
        message = `Oh! You are on ${planet}, sorry we do not service this planet yet!`
}
console.log(message)
document.getElementById("planet").innerHTML += message

// Switch Ex 2 with fall though
let answer = "b"
switch (answer) {
    case "a":
    case "c":
    case "d":
        document.getElementById("quiz").innerHTML += "Incorrect answer, please try again!"
    break
    case "b":
        document.getElementById("quiz").innerHTML += "Perfect, you got it right!"
}

// Functions
function myName (){
    return "Daniela"
}
let firstName = myName()

document.querySelector(".container h1").innerHTML += " !Hello " + firstName;

// Performing a given operation on two given numbers

function calculator (a, b, operator) {
    switch (operator) {
        case "add":
            return a + b
            break
        case "sub":
            return a / b
            break
        case "multi":
            return a * b
            break
        case "div":
            return a / b
            break
        default:
            return "I don't understand the operator"
    }
}

console.log(calculator(5, 7, "div"))

const value = 5

if (value === 0) {
    console.log('true')
} else {
    console.log('false')
}

