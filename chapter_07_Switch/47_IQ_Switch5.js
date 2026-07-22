// Same Case Value example - along with that we can write anything under case: statement - not just the console.log only.

let x = 10;
switch (x) {
    case 10: // In js we can have same case value twice - but in java not possible. In this case whatever comes first will get executed.
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("Invalid Input");
}