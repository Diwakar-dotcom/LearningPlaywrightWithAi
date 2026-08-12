let str = "  Hello, World!  ";

// Just to remind you - all these function doesn't change the original string - it creates a new modified string.
console.log(str.toUpperCase()); // returns the given string by making all its alphabets to upercase.
console.log(str.toLowerCase()); // returns the given string by making all its alphabets as uppercase.

console.log(str.trim()); // Returns the given string by removing/trimming whitespaces from the start and end of the string.
console.log(str.trimStart()); // returns the give string by removing/trimming from start only.
console.log(str.trimEnd()); // returns the given string by removing/trimming from end only.

// str.replace() method - this method also doesn't modify the original string instead only returns a new modified string.
let msg = "Test: Fail, Retry: Fail";
console.log(msg);
console.log(msg.replace("Fail", "Pass")); // This method will replace the first "Fail" word with "Pass" word on the applied string.
console.log(msg);

console.log(msg.replaceAll("Fail", "Pass")); // This method will replace all the "Fail" word with "Pass" word on the applied string
console.log("regex = ",msg.replace(/Fail/g,"PASS")); // We can also replace all match words of string by using regex - but regex is case sensivite so be mindful.

// Concatenation - we can perform string concatenation as follows

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;