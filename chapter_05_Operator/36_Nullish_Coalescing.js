// Nulllish Coalescing means that if original value (sudhaDudh) is not available or its null then ?
// It will go to second option instead of throwing error or exception --> it will send the second value (VerkaDudhOnly)

let sudhaDudh = null;
let val = sudhaDudh ?? "VerkaDudhOnly";
console.log(val);

sudhaDudh = "SudhaDudhOnly";
val = sudhaDudh ?? "VerkaDudhOnly";
console.log(val);


let api_response = null;
let responseData = api_response ?? "{}";
console.log(responseData);

api_response = "Diwakar";
responseData = api_response ?? "{}";
console.log(responseData);