// Destructuring

let [first, second, third] = [10, 20, 30];

console.log(first); // this first will be replaced by value 10 of the array.
console.log(second); // this will be replaced by value 20 of the array.
console.log(third); // this will be replaced by value 30 of the array.
console.log("--------------------");


// Rest pattern(...)using spread operator - collects everything left over into a NEW array.
// NOTE: You can not reuse first/second/third here, 'let' can not redeclared.
// In the same scope (SyntaxError: Identifier has already been declared).

let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // returns 10 ? - because it is assigned with the first element
console.log(b); // returns 20 ? - because it is align with the second element
console.log(rest); // returns array of [ 30, 40, 50 ] ? - because of spread operator all the rest element from its current positioned will be assigned to rest.
console.log("--------------------");

// We can also set default value to our variables.
// Default values - only used when slot is undefined or you can say not present on the right hand side.

let [x = 1, y = 2, z = 99] = [10, 20] // here you can see only 2 element is presetn but on left hand side we have 3 so for z default value will be used.
console.log(x,y,z); // returns 10 20 99 ? - reason mentioned above.
console.log("--------------------");


// We can also skip the element by just adding comma instead of variable name
// Skip elements with a hole, and swap without a temp variable

let [, , thirdOnly] = [10, 20, 30]; // here first and second value will skipped because no variable name is there.
console.log(thirdOnly); // returns 30 only - because before 2 were skipped.
console.log("--------------------");


let p = 1, q = 2;

[p, q] = [q, p]; // here replacing happening, p will be replaced q and q will be replaced by p

console.log(p, q); // returns 2 1 ? because p is replaced with q and q is replaced with p.