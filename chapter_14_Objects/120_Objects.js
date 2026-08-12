let a = {status: "pass"}; // This is a object.
let b = {"status": "pass"}; // This is not an object. its a json. What is the difference ? - difference is key:value, here key is in double qoutes but in js object key is not in double qoutes.
 // How to fetch value from objects using keys - below 2 ways using keys helps us fetching the value from objects.
 console.log(a.status);
 console.log(a["status"]); 

let a1 = {status: 'pass'}; // we can have values in single qoutes as well.
console.log(a1); // { status: 'pass' } - This prints the whole object
console.log(a1.status); // pass - this only prints object key --> value

// Objects keys are case sensitive
let a2 = {status: "pass", status: "fail"}; // JavaScript does allow this syntax, same key values but both properties have the same key. The last one wins.
console.log(a2); // { status: 'fail' } - as mentioned above last one wins, same key replaced with new value
console.log(a2.status);
console.log(a2.Status); // This will give undefined - because there is no such keys are there.

let a3 = {status: "pass", Status: "fail"};
console.log(a3.status);
console.log(a3.Status); // This will give fail - because status and Status both are different - thats why keys are case sensitive.


let c = {status: "pass"};
let d = c; // reference copy --> Thats mean d is also pointing to the same memory location where c object is present --> That means if I try to change d object then c object also get changed because both are pointing to the same memory location.
d.status = "fail";
console.log(c);
console.log(d);

let e = {status: "pass"};
let f = {status: "pass"};
console.log(e === f); // false - because both are different object - pointing to the different memory location even though key and value is same.

const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json); // { name: 'pramod', age: 10 }

const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);