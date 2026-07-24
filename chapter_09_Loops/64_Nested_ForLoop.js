// Nested For Loop --> One loop into another
// Mostly useful when we deal with arrays
// Question: What would be the output of the below program ?

for (let i = 0; i < 3; i++) { // This will run 3 times
    for (let j = 0; j < 3; j++) { // This will run 3 times for each iteration of its parent loop.
        console.log(i,j);
    }
}