let scores = [75, 30, 80, 90, 100];

// map() => map basically means transform each array element based on given condition and returns a new array result based on condition (similar to ternary operator)
let grades = scores.map(score => score > 30 ? "pass":"fail");
console.log(scores); // [ 75, 30, 80, 90, 100] - original array remains unchanged  
console.log(grades); // [ 'pass', 'fail', 'pass', 'pass', 'pass' ] - got pass or fail value array based on condition satisfaction on the array it applied.
// Also in map no. of array elements remains same unlike filter or reduce.

// filter() => This will return a new array based on no. of array element satisfies the condition, only the satisfied condition array will be returned not all array element unlike map.
let passedStudents = scores.filter(marks => marks > 30);
console.log(scores); //[ 75, 30, 80, 90, 100 ] - original array remains unchanged.
console.log(passedStudents); // [ 75, 80, 90, 100 ] - score with 30 is not here because it doesn't satisfies the condition.

// reduce() -> this will basically reduce your whole and returns you with a single value based on the condition you gave.
let totalResult = scores.reduce((sum,s)=> sum+s, 0); // Here sum and s are two variables & sum represents expression value and 0 represents sum variable default value and s represent each individual value of array
console.log(scores);  // [ 75, 30, 80, 90, 100 ] - original array remains unchanged
console.log(totalResult); // 375 - based on the function/condition it will give the total of the array elements
// but this reduce() function is not recommended to use

// NOTE: We can all do this by other ways as well like for loop n all. but why we are learning all these because it is reducing no. of lines we write in code.
// Nowadays most of the ai coding agent use these things to write code so you should be able to understand