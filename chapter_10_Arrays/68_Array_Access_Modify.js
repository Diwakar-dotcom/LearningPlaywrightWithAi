// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

// Positive Indexing starts with 0 - gives you element as follows as they are ordered in the array
console.log(statuses[0]);
console.log(statuses[1]);

// Negative Indexing starts with 1 - gives you array in reverse order using at() function.
console.log(statuses.at(-1)); // print last element of the array 
console.log(statuses.at(-2)); // print last 2nd element of the array
console.log(statuses.at(-3)); // print last 3rd element of the array
console.log(statuses.at(-4)); // print 'undefined' since this array has only 3 elements and it is going out its array size.

// How to modify or change array value?
statuses[1] = "blocked";
console.log(statuses); // prints the whole array with the new modified value at index 1.

// How to get the length of your array?
console.log(statuses.length); // by using .length 