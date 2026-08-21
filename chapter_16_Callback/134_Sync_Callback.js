let testResults = ["Pass", "Fail", "Pass", "Skip"];

// This is another example of callback with sync
testResults.forEach(function(result, index){
    console.log("Test",index, "->", result);
});

console.log("All Done");

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.