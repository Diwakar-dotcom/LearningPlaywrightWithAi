let num = prompt("Enter a number"); // This prompt is only for browser.

num = Number(num); // Converts string to number

if (num%2 === 0){
    console.log(num,"is Even.");
} else{
    console.log(num,"is Odd");
}