// Type 1: No Param, No Return
// if you try to print --> it will return undefined.

// Define
function greet() {
    console.log("Hi");
}

// No param and no Return (void)

// call
greet();
greet();
greet();
greet();

let output = greet(); // Here you can see we are storing whatever greet() function returned.
console.log(output); // Here you can see it returns nothing - but undefined.

function openBrowser() {
    console.log("Open Browser");
}

openBrowser();