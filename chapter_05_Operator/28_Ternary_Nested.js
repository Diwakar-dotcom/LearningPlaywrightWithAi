// Nested Ternary --> Multiple condition
// (Main condtion) ? true(YouCanMentionCondtionHereAsWell):false;
// (Main condtion) ? true:false(YouCanMentionCondtionHereAsWell);

let age = 25;
// age > 18 --> He will go to Goa else not
// age > 25 --> He can drink in Goa.

// Here in this example we have written example in true case.

let is_Diwakar_Enjoy = (age>=18) ? (age > 25 ? "Drink":"No Drink"):false;

console.log("is Diwakar Drink ?", is_Diwakar_Enjoy);