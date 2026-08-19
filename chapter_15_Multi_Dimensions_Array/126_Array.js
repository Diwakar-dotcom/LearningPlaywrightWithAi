// 1D array, list - duplicate element
let result = ["pass", "fail", "pass"];

//2D - array of arrays (like a table/grid) (3x3)
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; 

let mad = [
    [1,2,3,4] // [1x4] row = 1, col = 4
]

// [3x3] rows = 3 and col = 3
let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


// This is how we usually traverse through each element of the 2d array
for (let i = 0; i < 3; i++) { // hardcoded array length value
    for (let j = 0; j < 3; j++) {
        process.stdout.write(grid[i][j]+" "); 
    }
    console.log();
}

// in the below example we are dynamically fetching array row length and column length.
for (let i = 0; i < grid.length; i++) {  // grid.length --> returning array row length
    for (let j = 0; j < grid[0].length; j++) { // grid[0].length --> returning array column length, if column is different for each row then we can utilise grid[i].length
        process.stdout.write(grid[i][j]+" "); 
    }
    console.log();
}