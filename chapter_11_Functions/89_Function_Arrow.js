// Normal Function
function greet(name) {
    return `Hello, ${name}`;
}

// Function Expression - a function without name assigned to a variable
const greet1 = function(name) {
    return `Hello, ${name}`;
}

const greet2 = (name)=> `Hello, ${name}`;

// Arrow Function
// If you want to make a normal function ---> to an arrow function
// Remove the keyword function, remove the function name, remove the return keyword, remove the curly braces, and use this arrow =>

console.log(greet("Krishna!!"));
console.log(greet1("Radha!!"));
console.log(greet2("Balram!!"));