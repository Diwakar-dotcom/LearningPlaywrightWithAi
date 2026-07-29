// Shallow Copy - original array will not change if you change the copy.

let original = [1,2,3];
let copy1 = [...original]; // we use the spread(...) operator here as well
console.log(copy1); // [ 1, 2, 3 ]
console.log(original); // [ 1, 2, 3 ]
console.log("------------------");

let copy2 = original.slice();
console.log(copy2);
console.log("--------------------");

let copy3 = Array.from(original);
console.log(copy3);
console.log("--------------------");

let copy4 = original.concat();
console.log(copy4);
console.log("--------------------");

// Deep Copy - the change in copy will going to also change the original one.
let deep_copy_original_array = original; // This is how we perform deep copy on array
deep_copy_original_array.push(99);
console.log(deep_copy_original_array); // [ 1, 2, 3, 99 ] - original will also going to have the same array element.
console.log(original); // [ 1, 2, 3, 99 ] ? - because if we do deep copy then any change we do on copy it will be also reflected in the original one.