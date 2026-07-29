let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // this concat function merge both array elements and returns a new array with elements of both array.
console.log(c); // [ 1, 2, 3, 4 ] - returns the array of both elements

// ... spread operator - modern way concatenation
// ... all the element

let d = [...a, ...b];
console.log(d); // [ 1, 2, 3, 4 ] - returns the array of both elements

// If you want to merge all your array elements into a big string ?
// use this join method - it will returns you a string containing all elements of array.

let s = ["pass", "fail", "skip"].join(" | ");
console.log(s); // pass | fail | skip - see it returns the big string with after joining with the specified character