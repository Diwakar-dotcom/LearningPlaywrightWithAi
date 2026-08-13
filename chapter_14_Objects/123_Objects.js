const user = {
    name: "Krishna!",
    age: 30,
    email: "krishna@gokul.com"
}

console.log(user); // prints whole object at once

// Two ways to Accessing Properties value
console.log(user.name, user["name"]);
console.log(user.age, user["age"]);
console.log(user.email, user["email"]);

// Two ways to accessing/adding/modifying object properties
user.city = "Vrindavan"; // adding a new property city into our existing object
user.age = 16; // updating/modifying age property value.

console.log(user); // modified user object - prints whole objects
