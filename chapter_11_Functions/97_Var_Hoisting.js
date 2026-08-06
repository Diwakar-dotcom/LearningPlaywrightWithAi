console.log(greeting); // undefined ? - because we haven't declared and initliased before use.

var greeting = "Hare Krishna!!";

console.log(greeting); // Hare Krishna!! ? - because we have declare and assign a value

// Behind the scenes:
// var greeting;                    <---- hoisted with undefined
// console.log(greeting)            <---- undefined prints 
// greeting = "Hare Krishna!!"      <---- Assignment stays in place
// console.log(greeting).           <---- "Hare Krishna!!"