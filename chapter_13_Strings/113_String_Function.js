// String Properties & Basic Access

let a = "Krishna \n dasdasdas"; // \n character we can use inside a string
let a2 = 'Krishna "I am your" dasanu\ndas'; // we can also use \n and ""double quotes together inside single qoute string. but this double qoute prints as its with double qoute

console.log(a);
console.log(a2);

let str = "Hello, World!";
console.log(str.length); // Length count starts with 1 but array index starts with 0
console.log(str[0]); // index = 0; string is array of characters but remember in js there is no concept of character - this is just for understanding purpose.
console.log(str[7]);
console.log(str.at(-1)); // at() function is also there to access single string value from a string based on indexing
console.log(str.at(-6));

// charAt() - is also a function to get character from a string
console.log(str.charAt(0)); // This is will give the character at particular index.
console.log(str.charCodeAt(0)); // this will return you the character code for that particular string.