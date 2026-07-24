// Question: For how many time it will retry ?
let retry = 0;
do {
    console.log("Execute Code!");
    console.log("Retrying...", retry);
    retry++;
} while(retry < 3);