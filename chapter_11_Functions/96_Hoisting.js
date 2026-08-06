// var a;
console.log(a); // undefined - if above line commented and not commented.
var a = "Krishna!";
console.log(a);

// -------Phase 1: Memory Creation-------------
// var a = undefined;
// var b = undefined;
console.log(a); // undefined ? - because we have assigned undefined value and even if you comment above line and try to use the variable without declaration you will also notice the same output as declared above.
var a = "Krishna";
console.log(a); // Krishna ? - because we have redclare and reassign a new value

// Hoisting does NOT physically move your code. 
// It is a mental model to understand how the
//  JS engine handles declarations during compilation.