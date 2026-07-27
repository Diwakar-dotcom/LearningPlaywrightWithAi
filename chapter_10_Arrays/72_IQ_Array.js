let nums = [10, 25, 45, 30];
// How to find the element based on condition true false ? - find(x => x > 20) method this x > 20 is condition that this method tries to find true in the whole element and returns the first element where condition is true.
let result = nums.find(temp => temp > 20); // return the first match of the element which satisfies the mentioned condition.
console.log(result); // returns 25, as it is the first element to satisfied the temp > 20 condition.

// How to get the index of the found element based on condition ? - use findIndex() method similar as find method - only difference one returns element itself and this one return index of the matched element
let index = nums.findIndex(temp => temp > 30);
console.log(index); // returns 2 ? - because 45 is the first element to satisfy the condition(temp > 30) and its index value is 2.

// How to find the element from the last element or its index ? - use findLast() and findLastIndex() method
let element = nums.findLast(ele => ele > 30);
console.log(element); // returns 45, as this is the first element that satisfies the condition(ele > 30) from the last index search.

let indexFromLast = nums.findLastIndex(n => n < 15);
console.log(indexFromLast); // returns 0, as 10 is the only element that satisfies the above condition.