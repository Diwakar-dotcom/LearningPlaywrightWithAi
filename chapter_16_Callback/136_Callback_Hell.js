// Real QA Scenario: E2E Login Flow app.krishna.com
// Also lets know why we don't use callback to write test scripts ? - callback hell

function openBrowser(callback) {
    console.log("Opening the browser");
    setTimeout(function(){
        console.log("Step 1 - Browser Starting......");
        callback();
    },5000)
}

function goToLoginPage(callback) {
    console.log("Entering Login page url");
    setTimeout(function(){
        console.log("Step 2 - Login page loading....");
        callback();
    },5000);
}

function enterCredentials(callback) {
    console.log("Entering my credentials")
    setTimeout(function() {
        console.log("Step 3 - Entered my credentials......");
        callback();
    }, 5000);
}

function clickLoginButton(callback) {
    console("Navigating myself to Login button");
    setTimeout(function() {
        console.log("Step 4 - Clicked on Login Button.....");
        callback();
    }, 5000);
}

// This is Callback Hell - but its a smaller one for example. but lets suppose you have thousand steps in your then what it would like like lets see in the next example in next test file.

openBrowser(function(){
    goToLoginPage(function() {
        enterCredentials(function(){
            clickLoginButton(function(){
                console.log("Test is complete");
            })
        })
    })
})