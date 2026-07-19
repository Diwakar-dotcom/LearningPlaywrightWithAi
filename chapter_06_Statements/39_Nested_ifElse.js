let marks = 15;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A: Outstanding");
} else if(marks >= 80 && marks < 90){
    console.log("Grade B: Very Good");
} else if(marks >= 70 && marks < 80){
    console.log("Grade C: Good");
} else if (marks >= 60 && marks < 70){
    console.log("Grade D: OK OK");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade E: Not Bad");
} else if (marks >= 30 && marks < 50) {
    console.log("Grade F: PASS");
} else if (marks < 30 && marks >= 0) {
    console.log("Grade G: FAIL");
}