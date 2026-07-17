let statusCode = 404;

// Here in below example we have written condition in false case.
let category = 
    statusCode < 300 ? "Success":
    statusCode < 400 ? "Redirect":
    statusCode < 500 ? "Client Error": "Server Error";

console.log(`status ${statusCode}: ${category}`);