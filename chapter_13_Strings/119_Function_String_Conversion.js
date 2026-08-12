// String Conversion

// To String
(200).toString(); // "200";
true.toString(); // "true"

Number("42"); // 42

parseInt("42px"); // 42
parseFloat("3.14rem"); // 3.14

let str = "hello"; // Things are immutable(unable to be changed) in nature ?
str[0] = "H"; // This will not replace original string str
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);