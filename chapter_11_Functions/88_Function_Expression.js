// Normal Function
function greet(name) {
    return `Hello, ${name}`;
}

// Function Expression - a function without name assigned to a variable
const greet1 = function(name) {
    return `Hello, ${name}`;
}

console.log(greet("Krishna!!"));
console.log(greet1("Damodar!!")); // You can call function expression with the same assigned variable name.