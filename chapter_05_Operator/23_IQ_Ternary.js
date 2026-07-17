let actualStatusCode = 200;
let expectedStatusCode = 200;

let output = (actualStatusCode == expectedStatusCode) ? "PASS" : "FAIL"; // I am using == equals to only because I wanted loosely checked - because it value doesn't matter whether its number or string it should be equal that's all.

output = (actualStatusCode == expectedStatusCode) ? "✅ PASS" : "❌ FAIL";

console.log(output);
