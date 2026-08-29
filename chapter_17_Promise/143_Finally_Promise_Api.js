let apiCall = new Promise(function(resolve, reject){
    resolve({status:200});
    reject("500 - Internal Server Error");
})

apiCall.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("I will execute anyhow no relation with resolve and reject");
})