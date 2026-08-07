console.log(username); // ReferenceError: Cannot access 'username' before initialization ? - Because let doesn't support hoisting it won't allow to use the variable before declaration.
let username = "diwakar";
console.log(username); // diwakar ? - because username is declared and initialsed first then get used.