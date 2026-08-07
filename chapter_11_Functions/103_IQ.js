let a = 10;
console.log(a);
if(true) {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization - because let is a block scoped.
    let a = 20;
}