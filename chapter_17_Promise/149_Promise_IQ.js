Promise.resolve("Quick Win").then(function(msg){
    console.log(msg);
})

Promise.reject("Quick Loss").catch(function(msg){
    console.log(msg);
})

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

// Lets see how to settle multiple promises at once
Promise.all(t1,t2,t3).then(function(results){
    console.log(results);
}).catch(function(err){
    console.log(err.message);
})


Promise.allSettled(
    [
        Promise.resolve("API 200"),
        Promise.reject("API 500"),
        Promise.resolve("API 201")
    ]
).then(function(results){
    results.forEach(function(r){
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "-->" +val);
    })
})