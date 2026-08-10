let url = "https://www.google.com"; // this is also string - double qoute
let status = 'pass'; // this is also string - single qoute
let message = `Test completed in ${320}ms`; // this is also string - template string literal

// Single qoutes
let a = 'hello';

// Double qoutes
let b = "World";

// Template literals (backticks) — allows expressions & multiline
let name = "Krishna!";
let msg = `Hello ${name}! 2 + 2 = ${2+2}`;
console.log(msg);

// Template String - MultiLine
let report = `
    Test: Login
    status: Pass
    Duration: 320ms
`;

console.log(String(200)); // String() method converts 200 number into a string value.
console.log(String(true)); // "true" - converts boolean to string
console.log(String(null)); // "null" - converts null to string
console.log(String([1,2])); // "1,2" - converts array into a string.