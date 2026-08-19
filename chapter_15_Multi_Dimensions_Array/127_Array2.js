let grid = [
    [10,20,30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0]); // first element of the array row = 1 and col = 1 for indexes row = 0, col = 0

// lets see how to assign/change the value of particular index in multidimensional array
grid[0][0] = 99;
console.log(grid[0][0]); // 99 ? - because in above statement we have change grid[0][0] value from 10 to 99

console.log(grid.length); // 3 ? - because no. of rows is 3
console.log(grid[0].length); // 3 ? - because no. of col is 3

console.log(grid[grid.length-1][grid[0].length-1]); // That's how we can dynamically fetch the last element of the 2d array
console.log(grid[2][2]);

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180, 250]
];

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        process.stdout.write(testMatrix[i][j]+" "); // this write method only works with string thats why +" " is added here
    }
    console.log();
}

console.log("-------------------x------------------x-------------");

// Another way to access 2d array elements
for(let row of testMatrix) { // this statement fetch each row from the 2d array
    for(let cell of row) { // this statement fetch each value of that row
        process.stdout.write(cell+" ");
    }
    console.log();
}

console.log("-------------------x------------------x-------------");


// Another way to access 2d array elements using forEach
testMatrix.forEach(row => { // first forEach loop will fetch the complete row of the 2d array
    row.forEach(cell => process.stdout.write(cell+" ")); // second forEach loop will fetch the each value of the fetched row by parent loop
    console.log(); // this is just for new line
});
