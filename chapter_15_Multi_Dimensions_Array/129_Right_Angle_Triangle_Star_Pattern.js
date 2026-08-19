// n = 3
/*

*
**
***

*/

const n = 10;

for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

// But if you want start your loop from 1 for the purpose avoiding confusion then your for loop will looks like this
for(let i = 1; i <= n; i++) { // i start from 1 that's why condition becomes from i < n to i <= n
    for(let j = 1; j <= i; j++) { // j = 1 condition remains same j <= i 
        process.stdout.write("* ");
    }
    console.log();
}
