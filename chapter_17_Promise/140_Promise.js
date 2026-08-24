// Promise means resolve or reject

let order = new Promise(function(resolve, reject){
    let foodReady = false;
    if (foodReady) {
        resolve("Pizza is delivered!!");
    } else {
        reject("Order Cancelled");
    }
});

console.log(order);