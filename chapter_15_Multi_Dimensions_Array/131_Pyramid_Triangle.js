/**
   *
  ***  
 *****
*/

const n = 10;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= n - i; j++) { // This is to add spaces
        row += " ";
    }

    for (let j = 0; j <= 2 * i; j++) { // This to add stars
        row = row + "*";
    }

    console.log(row); // this is to print whole star and spaces all along for the first row
}

// But if you want to use loop using 1 instead of 0 then your loop will looks like this

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }
    console.log(row);
}