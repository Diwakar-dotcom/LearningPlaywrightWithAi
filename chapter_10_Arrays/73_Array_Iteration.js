// Question: How many ways there to iterate through arrays ?
let tests = ["login", "checkout", "search"];

// 1. using loops
for(let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}

console.log("-----------------"); // just for the purpose of separating outputs

// 2. using for..of(cleanest for values)
for (let test of tests) { // here test hold the single element of the array tests
    console.log(test);
}

console.log("-----------------"); // just for the purpose of separating outputs

// 3. using forEach (no return value)
tests.forEach((test, index)=>{
    console.log(`${index}: ${test}`);
})

console.log("-----------------"); // just for the purpose of separating outputs

// 4. using entriest() [index + value]
for(let [i, test] of tests.entries()) { // Here i is representing index and test is represent element of tests array
    console.log(i, test);
}

console.log("-----------------"); // just for the purpose of separating outputs

// 5. using in statement in for loop
let students = ["Diwakar", "Amanjeet", "Nimit"];
for(let student in students) { // Here student is represting index of individual element of the array students[];
    console.log(student, ":",students[student]);
}