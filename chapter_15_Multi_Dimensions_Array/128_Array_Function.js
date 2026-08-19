let scores = [
    [85, 90, 78], // student 0, sum = 253
    [60, 45, 70], // student 1, sum = 175
    [95, 88, 92] // student 2, sum = 275
];

let rowSums = scores.map(row => row.reduce((a,b) => a+b)); // here map function will pickup each row and then on each row reduce function will pickup 2 values and sum them
console.log(rowSums); // [ 253, 175, 275 ] - this will keep the sum of all rows array

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for(let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) { // include method will check whether fail word is present or not in current value of the array if present then it will simply print the value
            console.log(suiteResults[i][j]);
        }
    }
}