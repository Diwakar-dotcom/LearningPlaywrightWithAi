let env = "staging";

// you can also write ternary operator in the below way as well.
let baseUrl = (env === "prod")
    ? "https://api.example.com"
    : "https://staging-api.example.com";

console.log(baseUrl);