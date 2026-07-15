// Rule of Thumb:
// == --> loose equality (does type coercion, surprising)
// === --> strict equality (no coercion, what you usually want)

// ----------- 1. Empty string "" vs 0 vs "0" (transivity broken) --------------

console.log("" == 0); // true - why because empty string considered zero in this loose equality

console.log("" === 0); // false - why ? because empty string data type also matches with zero both operands data type is different so false.

console.log("0"==0) // true - why ? because it only checks the value.
console.log("0"===0) // false - why ? because it also matches the data type of both operand

console.log("0"=="") // false - Why ? - because both are string and js breaks its own rule
console.log("0"==="")