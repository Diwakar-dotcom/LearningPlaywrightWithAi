let testMarks = 50;

switch(true){
    case (testMarks >= 95 && testMarks <= 100):
        console.log("Outstanding - Top Performer");
        break;
    case (testMarks >= 85 && testMarks < 95):
        console.log("Excellent - Above Expectations");
        break;
    case (testMarks >= 75 && testMarks < 85):
        console.log("Good - Meets Expectations");
        break;
    case (testMarks >= 50 && testMarks < 75):
        console.log("Average - Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory - Requires Training");
}