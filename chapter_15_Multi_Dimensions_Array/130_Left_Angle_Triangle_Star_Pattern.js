/*

*****
****
***
**
*

*/

const n = 10;
for(let i = n - 1; i >= 0; i--) {
    for(let j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}