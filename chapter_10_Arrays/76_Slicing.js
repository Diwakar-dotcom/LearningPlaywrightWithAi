// Slicing and Combining

let arr = [1,2,3,4,5];
// slice does not mutate or change the actual array instead, it returns you the new array
// slice(start, end-1) here start is index and end is also index.
// It will always traverse in from starting point to right direction 

console.log(arr.slice(1,3)); // [ 2, 3 ] - why? because end = 3 so end - 1 = 2 so at index 1 and 2 we have these 2 values.
console.log(arr); // [ 1, 2, 3, 4, 5 ] - here you can see original array remains as it is - no change

console.log(arr.slice(2)); // [ 3, 4, 5 ] ? - if you don't mention any end then it will automatically reach to the end of the array element from the start value.

console.log(arr.slice(-2)); // [ 4, 5 ] - right side
console.log(arr.slice(-3)); // [ 3, 4, 5 ] - right direction from its start

console.log(arr.slice(0)); // [ 1, 2, 3, 4, 5 ] - since end is not mentioned so it traversed the whole array elements from its starting index.

console.log(arr.slice(-5)); // [ 1, 2, 3, 4, 5 ] - negative indexing

console.log(arr.slice(-3, -5)); // [] - it gives empty ? why because it will never traverse in left direction.

