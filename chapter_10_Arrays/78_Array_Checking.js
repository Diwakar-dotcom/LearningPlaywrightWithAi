// Checking Arrays
// Check if something is an Array

const { constants } = require("node:buffer");

let result = Array.isArray([1,2,3]); // this will return true as it is an Array 
console.log(result); // return true, if array either false.
let result1 = Array.isArray("c");  // this will return false because its not an array its a character or string
console.log(result1); // false
console.log("----------------")

// every() - All array element must satisfies the condition then it will return true.
// GOTCHA: the missing ; below would make ASI glue the next line's [ ... ]
// into an index access -> TypeError. Always end these lines with ;

let arr1 = [10,20,30];
let arr2 = [30,40,50];

console.log(arr1.every(ele => ele > 5)); // returns true ? - because all element of arr1 satisfies the conditon 
console.log(arr2.every(ele => ele > 40)); // returns false ? - because all element of arr2 doesn't satisfies the condition.

console.log("-----------");
// some() - If any one of the array element satisfies the condition then it will return true, otherwise false.
// In other words, atleast one element should satisfies the condition to return true.
console.log(arr1.some(ele => ele > 20)); //retruns true ? - because 30 is greater than 20, only one element satisfies the condition that's why its passing.
console.log(arr2.some(ele => ele < 10)); // returns false ? - because not a single element satisfies the condition.
