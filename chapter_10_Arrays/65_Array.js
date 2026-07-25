let fruit = []; // an empty array
console.log("Empty Array: ",fruit,"typeof array:",typeof fruit);

let browsers = ["Chrome", "Mozilla", "Firefox"];
console.log("browsers[] =",browsers);
console.log("browsers[0] =", browsers[0]); // print first element of the array

// If you want to access your array in reverse order --> Then you can do this using negative indexing along with array.at(-1)function.
console.log("-ve Indexing: browsers[-1]", browsers.at(-1)); // -ve indexing starts with -1 which is last element of an array

// If you want to get the length of the array then you utilise .length method to get length of the array
console.log("browsers.length = ", browsers.length);
console.log("fruit.length = ", fruit.length);

// For negative indexing ==> use at() function:
console.log("browsers[-1] = ", browsers[-1]); // undefined
console.log("browsers.at(-1) = ", browsers.at(-1)); // last element of the array
console.log("browsers.at(-2) = ", browsers.at(-2)); // last second element of the array
console.log("browsers.at(0) = ", browsers.at(0)); // first element of the array

