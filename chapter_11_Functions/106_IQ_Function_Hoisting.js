greet("Alice"); // works fine - because this is not function expression - this a normal function.

function greet(name) {
    console.log("Krishna");
    return `Hello, ${name}`; // Here we are using template literal
}

// Above code works fine - because its a function. but below code sayHi() won't work it will throw arrow because its a function expression.

// sayHi("Krishna"); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function (name) {
    return `Hi, ${name}`;
};