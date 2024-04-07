// This File is Dedicated to Variables in Node.js

// Declaring variables
var a = 10; // number
let b = 20; // number
const c = 30; // number (constant)

// Boolean variable
let isStudent = true;

// String variable
let name = "Ravindra Valand";

// Array variable
let counts = [1, 2, 3, 4, 5];

// Object variable
let info = { name: "Ravindra", age: 23 };

// Block-level scope
{
    let x = 5;
    var y = 10;
    const z = 15;
    console.log(x); // Output: 5
    console.log(y); // Output: 10
    console.log(z); // Output: 15
}

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30
console.log(isStudent); // Output: true
console.log(name); // Output: Ravindra Valand
console.log(counts); // Output: [1, 2, 3, 4, 5]
console.log(info); // Output: { name: 'Ravindra', age: 23 }
console.log(y); // Output: 10

// Uncomment the following lines to see the errors
// console.log(x); // Error: 'x' is not defined (due to block-level scope of let)
// z = 20; // Error: Assignment to constant variable

