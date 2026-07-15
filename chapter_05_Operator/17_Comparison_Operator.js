// Comparison Operators will always return a boolean value (true or false)
// =, ==, ===


// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)


// Domiz = Pizz hut - Pizza Lose check
// === -> Strict Comparsion ->

// > , < , >= , <= 


// console.log(3 > 4);
// console.log(3 < 4);
// console.log(4 >= 4); // (4 > 4 or 4 == 4, or gate)

// console.log(5 == "5"); // lose couple comparsion , value
// console.log(5 === "5"); // stict not allowed - valeu + datatype both

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

// console.log(3 == "4");
// ! -> not char
console.log(5 != "5"); // lose -> datatype or value
console.log(5 !== "5"); // true
// console.log(5 !=== "5"); This dosn't

console.log(5 === 5);

// Equal to (==)
let num1 = 10;
let num2 = "10";
console.log(num1 == num2); // true, because the values are equal after type coercion

// Not equal to (!=)
console.log(num1 != num2); // false, because the values are equal after type coercion

// Strict equal to (===)
console.log(num1 === num2); // false, because the values are equal but the types are different

// Strict not equal to (!==)
console.log(num1 !== num2); // true, because the values are equal but the types are different

// Greater than (>)
console.log(num1 > 5); // true, because 10 is greater than 5

// Less than (<)
console.log(num1 < 15); // true, because 10 is less than 15

// Greater than or equal to (>=)
console.log(num1 >= 10); // true, because 10 is equal to 10

// Less than or equal to (<=)
console.log(num1 <= 20); // true, because 10 is less than 20   
