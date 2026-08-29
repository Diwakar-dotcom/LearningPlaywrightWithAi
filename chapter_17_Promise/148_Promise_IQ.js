let p = new Promise(function (resolve, reject){
    resolve(42);
});

p.then(function (value){
    console.log("Answer: ", value);
});

let q = new Promise(function(resolve, reject){
    reject("Something broke");
});

q.catch(function(err){
    console.log("Caught:", err);
})