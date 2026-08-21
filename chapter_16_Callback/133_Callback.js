// Let's see the practical use case of callback in our playwright automation. That's how automation script inernally runs and defined
function test(testCaseTitle, callMeWhenDone) {
    console("Hi start this",testCaseTitle,"TestCase");
    callMeWhenDone();
}

// This is what we do when we when we write script
// test("Verify Login Page is working", async ({page})=>{

// });


function krishnaStory(item, callMeWhenStoreIsEmpty) {
    console.log("Store is busy");
    // .............
    // .............
    console.log("Story is empty");
    callMeWhenStoreIsEmpty();
}

krishnaStory("Starting Shopping", ()=>{
    console.log("Let's Start the Shopping!!");
})