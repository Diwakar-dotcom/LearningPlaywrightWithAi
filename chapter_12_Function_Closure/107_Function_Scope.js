// Scope in Functions

let env = "staging"; // global scope

function setupConfig(){
    let timeout = 30000; // local scope
    console.log(env); // ✅ can access global scope variable
    console.log(timeout); // ✅ can access local scope variable
}

setupConfig();
console.log(env); // ✅ Accessible - because its in global scope.
console.log(timeout); // ❌ ReferenceError: timeout is not defined - because its in local scope can not be accessed outside of its scope.

// --------
let g_x = 10;

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); // ✅ inner function can access outer function variables
    }
    inner(); // ✅ calling inner function inside outer function.
    console.log(y); // ❌ ReferenceError: y is not defined - because outer function can not access inner function variables.
}

outer(); // ✅ calling outer function