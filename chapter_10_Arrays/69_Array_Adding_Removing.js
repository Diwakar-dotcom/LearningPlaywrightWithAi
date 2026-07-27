let arr = [1,2,3];
console.log(arr);

// Add to END
arr.push(4); // This will add this '4' after the last element of array
console.log(arr); // prints the updated array

// Remove from end
arr.pop(); // This will remove the last element of the array.
console.log(arr); // prints the updated array

arr.push(5,6); // This will add multiple elements at once from the last element of the array
console.log(arr); // prints the updated array

// Add to Beginning
arr.unshift(0); // This wil add 0 as a first element of the array
console.log(arr); // updated array

// Remove from the beginning - returns the removed element
arr.shift(); // If you want to remove the first element of the array then use this method
console.log(arr); // prints the updated array

// current array elements: [ 1, 2, 3, 5, 6 ]


// splice() method - the game changes which can do everything using one method (adding, removing, inserting at specific index, everything)
// splice(index no. where to start action, how many elements to delete, which element to add.....)

arr.splice(2,1); // Here 2 is the target index on which deletion will get perform and 1 says from 2nd index how many elements do we need to delete?
console.log(arr); // [ 1, 2, 5, 6 ], so on 2nd index we have 3 and it removed three from the array as you can seee.

arr.splice(2,0,99); // This will insert 99 at the 2nd index of the array and doesn't delete any element of the array.
console.log(arr); // [ 1, 2, 99, 5, 6 ], As you it has inserted 99 at the index number 2nd.

arr.splice(1, 2, 10, 20); // 10 and 20 will start getting inserted from the array index 1st and before inserting it will first delete 2 elements from the 1st index.
console.log(arr); //[ 1, 10, 20, 5, 6 ], new array after splice operations.

// splice() method also supports - negative indexing
arr.splice(-1,1); // start removing element from reverse order of array i.e last index of array -1.
console.log(arr); // [ 1, 10, 20, 5 ] ==> remove 1 element from the last index