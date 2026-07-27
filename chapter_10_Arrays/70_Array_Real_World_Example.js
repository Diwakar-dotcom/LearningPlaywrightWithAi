let browser = ["chrome", "safari", "firefox", "edge", "opera"];
console.log(browser.length); // prints lenght of the browser array

browser.pop(); // removes element from the last index
console.log(browser); // [ 'chrome', 'safari', 'firefox', 'edge' ], as you can last element has been removed from the array because of pop() method.

let removedElement = browser.shift(); // it removes the first element and returns the removed element
console.log(browser); // [ 'safari', 'firefox', 'edge' ] ==> After removing output
console.log(removedElement);  //chrome - removed element

// Question: How to access each element of the array ? - Let's access each element of the array using for loop.

for(let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") { // if 'opera' found in array - it will execute below statement else below statement never get executed.
        console.log("Opera doesn't support automation now");
    }
}