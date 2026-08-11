// Searching & Checking

let url = "https://www.google.com";
// includes() - find out a string in a string and if found return true else false.
console.log(url.includes("www")); // return true ? - because this exists in the string.
console.log(url.includes("google")); // return true ? - because this exists in the string.
console.log(url.includes("vwo")); // return false ? - because this doesn't exist in the string.

console.log("------------------------------");
// startsWith / endsWith - return true/false based on the match
console.log(url.startsWith("https:")); // return true ? - because our string starts with https:
console.log(url.endsWith(".com")); // returns true ? - because our string ends with .com
console.log(url.endsWith("google")); // return false ? - because our string doesn't ends with google.
    
console.log("------------------------------");
// To get the index of particular string - you can use the below string methods
console.log(url.indexOf("w")); // return first string match index from first
console.log(url.lastIndexOf("w")); // return first string match index from last
console.log(url.indexOf("vwo")); // return -1, because there is no match of the given string

// ASCII -> A -> 65