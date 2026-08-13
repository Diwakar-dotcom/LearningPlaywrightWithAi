// Primitive Datatype - call by value
// Primitive: number, string,  boolean, null and undefined

let a = 10;
let b = a; // a values copied to the b
b = 99; // that's why changing of b value does not change the original a value.
console.log(a); // 10
console.log(b); // 99

a = 90;
console.log(a);
console.log(b);

console.log("------------------");

// Objects - the reference value is copied to the assigned copied object, so here now both variable is pointing to the same address so any one of do any operation it will reflected in both because both pointing to the same memory address
// Reference - array, object, function

let obj1 = {val: 10}; 
console.log(obj1); // { val: 10 }
let obj2 = obj1; // Here, reference copy -> means obj1 and obj2 is pointing the same memory address
obj2.val = 20; // updating val value
obj2.newValue = 50; // adding new property to the object 
// above both operation is also get reflected to the obj1 because both pointing the same memory address
console.log(obj1); // { val: 20, newValue: 50 }
console.log(obj2); // { val: 20, newValue: 50 }
