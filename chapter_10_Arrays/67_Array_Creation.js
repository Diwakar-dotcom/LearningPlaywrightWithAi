// Question: What is the most preferred way to create array in Js?
let browsers = ["chrome", "firefox", "safari"];

// Question: How to create an empty array of a specific size in js? or Array Constructor
let scores = new Array(3); // Creates empty array of 3 size.
scores[0] = 1; // This is how we used to initiialise the array or put value in array

// Array constructor with values
let score2 = new Array(1,2,3); // creates [1,2,3]

let numbers = new Array(100, 200, 300, 400);

let test = Array.of(10,20,30,40,50); // Another way to create array
console.log(test.length);

// Question: How to get the each character as an array from string using array?
let chars = Array.from("Hello"); //
console.log(chars); //[ 'H', 'e', 'l', 'l', 'o' ]