// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

console.log(" — Confusing Comparisons in JS");

// ------------------ 2. Null vs Undefined --------------
console.log(null == undefined) // true ? -> special rule in ==
console.log(null === undefined) // false ? -> different data types

console.log(null == 0) // false ? - null only == undefined or null
console.log(null === 0) // false ? - above reason

console.log(null >= 0) // true ? -> >= coerces null to 0(gotcha)
console.log(null > 0) // false ?
console.log(null == 0 || null > 0) // false ? -> because null >= 0 is true