console.log("Test 1: Started");

// async example of callback
setTimeout(function(){
    console.log("Test 2: API response received!"); // This will get printed in last ? - because async
}, 5000);

console.log("Test 3: Moving to next last");

