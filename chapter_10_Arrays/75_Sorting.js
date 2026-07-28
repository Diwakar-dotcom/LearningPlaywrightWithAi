let fruits = ["banana", "cherry", "apple", "drumsticks"];
console.log(fruits); // [ 'banana', 'cherry', 'apple', 'drumsticks' ] - Without sorting
fruits.sort(); // This function will sort the array element in natural sorting order by converting everything into string and by comparing first alphabet
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'drumsticks' ] - After sorting - change original array

let scores = [59, 42, 70, 90];
console.log(scores); // [ 59, 42, 70, 90 ] - Before Sorting
scores.sort(); // sorting - works fine gets expected output
console.log(scores); // [ 42, 59, 70, 90 ] - After Sorting - change original array

let num = [10,1,21,2];
console.log(num); // [ 10, 1, 21, 2 ] - original array before sorting
num.sort(); // Why ? - this time it fails to sort ? - because as I earlier mentioned it sorts in natural sorting order
console.log(num); // [ 1, 10, 2, 21 ] - original array after sorting - but not getting expected outcome.

// Let's understand Natural sorting ?
/*
So basically what it does in natural sorting order is that it converts the array element into string array elements and then 
perform the sorting as we do in string --> i.e. checking the first alphabet of the string. That's why here it failed.
*/

// How to do proper sorting using sort() method ? - Lets understand with the below example.
// In ascending order sorting
num.sort((a,b) => a - b);
console.log(num); // [ 1, 2, 10, 21 ]
// In descending order sorting
num.sort((a,b) => b - a);
console.log(num); // [ 21, 10, 2, 1 ]

// Let's understand how above code is working ?
/*
Here, inside the sort function we are passing two parameter a, b which is nothing but the two elements of our array
then by using array function we are saying to perform some operation like a + b or b - a;
Let's understand what does this operation mean?

- this is for ascending order sorting
if (a - b) = +ve result then --> it means a is bigger and b smaller
if (a - b) = -ve result then --> it means a is smaller and b is bigger
if (a - b) = 0 result then --> it means both values are equal

- same goes for descending order as well.
*/

// How to reverse your array ?

let arr = [34, 22, 1, 4, 5];
console.log(arr); // [ 34, 22, 1, 4, 5 ] - original array before sorting
arr.reverse(); // It will just the reverse the array elements - not sort the array elements
console.log(arr); // [ 5, 4, 1, 22, 34 ] - original array after sorting