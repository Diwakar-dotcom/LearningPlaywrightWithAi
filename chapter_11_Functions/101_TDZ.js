{
    console.log(a); // Reference error ? - because we are trying to use before declaration and initialisation of let.
    let a = 10;
}

// Let's understand above in more detailed and step by step What TDZ is?

/*

// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅

*/