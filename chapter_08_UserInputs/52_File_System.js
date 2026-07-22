// Finally the working way of taking user inputs

console.log("Enter the number: ");
const data = require('fs').readFileSync(0, 'utf8'); // This statement will kept on taking input until you stop it by ctrl + D command
console.log("Hi", data);

// In the terminal:
// Type 15
// Press Enter
// Press Ctrl+D