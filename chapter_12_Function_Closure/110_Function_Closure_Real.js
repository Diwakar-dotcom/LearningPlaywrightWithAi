const {run} = require("node:test");

function maxRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName){
        attempts++;
        if(attempts > max) {
            return `${testName} exceed max retries (${max})`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };

    return tryAgain;
}

let runTcRetry = maxRetryTracker(3);
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));
console.log(runTcRetry("Login"));