let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));

// splitting and joining
"pass, fail, skip".split(","); // this code returns a new array --> ["pass", "fail", "skip"]
"hello".split(""); // this code returns a new array --> ["h", "e", "l", "l", "o"]

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);