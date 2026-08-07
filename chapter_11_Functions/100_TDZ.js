// TDZ = Temporal Dead Zone

var a = "Diwakar";
// 10,000 lines
if(true) {
    console.log(a);
    var a = "temp";
}

// TDZ
// Global scope
// a = "Pramod"
// Enter Block, Block Scope
// a = TDZ (exist but not initialized)
// console.log(a);
/*
| Keyword | Hoisted? | Initial Value | TDZ?  | Scope           |
| ------- | -------- | ------------- | ----- | --------------- |
| `var`   | ✅ Yes    | `undefined`   | ❌ No  | Function/Global |
| `let`   | ✅ Yes    | Uninitialized | ✅ Yes | Block           |
| `const` | ✅ Yes    | Uninitialized | ✅ Yes | Block           |

*/

/*
The biggest misconception

People often say: "let is not hoisted."

- That's not correct.

- A more accurate statement is:

* var is hoisted and initialized with undefined.
* let and const are also hoisted, but they remain uninitialized until their declaration is executed. The period between entering the scope and initialization is the Temporal Dead Zone (TDZ).

*/