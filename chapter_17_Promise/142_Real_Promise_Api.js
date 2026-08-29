let apiCall = new Promise(async function(resolve, reject){
    reject("500 - Internal Server Error");
});

apiCall.then(function(data){
    console.log("Data is successfully!!");
}).catch(function(error){
    console.log(error);
})

// .catch() runs only when the promise is rejected
// .then() is completely skipped