// Data Types in JS
// We have this below 2 categories of data types in JS
/*
1. Primitive Data Types
2. Reference Data Types
*/

//  1. Primitive Data Types
//  Primitive data types are immutable (cannot be changed) and are compared by value. 
// They include:
/*
1. Number: Represents numeric values, both integers and floating-point numbers.
2. String: Represents sequences of characters enclosed in single or double quotes.
3. Boolean: Represents true or false values.
4. Null: Represents the intentional absence of any object value.
5. Undefined: Represents a variable that has been declared but has not been assigned a value.
6. Symbol (ES6): Represents a unique and immutable value, often used as object property keys.
7. BigInt (ES2020): Represents integers with arbitrary precision, allowing for very large numbers.
*/

// 2. Reference Data Types
// Reference data types are mutable (can be changed) and are compared by reference. 
// They include:
/*
1. Object: A collection of key-value pairs, where keys are strings (or symbols) and values can be any data type.
2. Array: An ordered list of values, which can be of any data type, including other arrays or objects.
3. Function: A block of code that can be executed when called, and can also be treated as a first-class object.
4. Date: Represents a specific point in time, with methods for manipulating and formatting dates and times.
5. RegExp: Represents regular expressions, used for pattern matching within strings.
6. Map: A collection of key-value pairs where keys can be of any data type, and maintains the order of insertion.
7. Set: A collection of unique values, where each value can only occur once. 
*/

let a = 10;
let b = "Hello world";
let c = true;
let d = 10.15;
let e;
let f = null;

console.log("a = ", typeof a);
console.log("b = ", typeof b);
console.log("c = ", typeof c);
console.log("d = ", typeof d);
console.log("e = ", typeof e);
console.log("f = ", typeof f);
