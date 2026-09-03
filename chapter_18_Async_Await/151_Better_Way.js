function openBrowser(){
    return new Promise(function (resolve) {
        resolve("Browser Opened");
    })
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Navigated to Login");
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials are entered");
    })
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Login Clicked");
    })
}

async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step 1:",msg1);

    let msg2 = await goToLogin();
    console.log("Step 2:",msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}

runLoginFlow(); // If you run this then might be possible it will execute few code of this function and then move to the below code.
await runLoginFlow(); // This is async method so you have to use await while calling it otherwise it will not run in sequence.


openBrowser()
.then(function(msg){
    console.log("Step1:", msg);
    return goToLogin();
}).then(function(msg){
    console.log("Step2:", msg);
    return enterCredentials();
}).then(function(msg){
    console.log("Step3:", msg);
    return clickLogin();
}).then(function(msg){
    console.log("Step4:",msg);
})

function apiRequest() {
    return new Promise
}