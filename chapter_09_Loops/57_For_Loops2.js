for (let _1 = 0; _1 <= 10; _1++) { // Is it the valid way to declare variable inside for loop.
    console.log(_1);
}

for (let diwakar = 0; diwakar > 1; diwakar++) {
    console.log(diwakar); // It will not go inside the loops body because condition is false.
}

// for (let diwakar = 0; ; diwakar++) { // without condition is a valid syntax.
//     console.log(diwakar); // Since there is no conndition set here --> So loop will execute for infinite times.
// }

// How many time diwakar will get gift from Papa
for (let diwakar = 0; diwakar < 18; diwakar++) { 
    if (diwakar > 15) {
        console.log("Diwakar will get gift from Papa, Latest Macbook this year");
    } else {
        console.log("No Macbook Gift from Papa, Only bicycle");
    }
}