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

let r = Promise.resolve(5);

r.then(function(val){
    return val*10;
}).then(function(val){
    console.log("Result:", val);
});

Promise.resolve(1)
.then(function(val){
    console.log(val);
    return val+1;
}).then(function(val){
    console.log(val);
    return val+1;
}).then(function(val){
    console.log(val);
    return val+1;
}).then(function(val){
    console.log(val);
})

Promise.resolve("Start")
.then(function(val){
    console.log(val);
    throw new Error("Broke at step 2");
}).then(function(){
    console.log("This will not run");
}).catch(function(err){
    console.log("Caught: ",err.message);
})

Promise.reject("Test Failed")
.then(function(data){
    console.log("Data:", data);
}).catch(function(err){
    console.log("Error:", err.message);
}).finally(function(){
    console.log("Cleanup done")
});