// Searching in array

let results = ['pass', 'fail','pass','error', 'grace','fail'];

// Question: How to get the index of first element match with your search element ?
// user indexOf() method to get the first element match index of your search element
// indexOf() returns first index, or -1 if not found

console.log(results.indexOf("fail")); // returns 1 as it found first 'fail' element match at index 1.
console.log(results.indexOf('skip')); // return -1, as no element match found

// lastIndexOf() - it start searching from the last index of the array
console.log(results.lastIndexOf('fail')); // returns 5 index as it started searching from the last index.

// includes() - this method will return true or false based on element is found or not!!
console.log(results.includes("error")); // it will return return TRUE - as error is present in the array
console.log(results.includes("blocked")); // it will return FALSE - as blocked is not present in the array