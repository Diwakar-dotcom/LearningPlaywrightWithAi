// Switch - without break statement --> it will execute all the cases after the matched cases because there is no break statement.
// 0 - Sunday, 1 - Monday, 2 - Tue.....

let day = 2;

switch(day){
    case 0: 
            console.log("Sunday - Rest Day");
    case 1:
            console.log("Monday - Planning Day");
    case 2:
            console.log("Tuesday - Team member division");
    case 3: 
            console.log("Wednesday - Transforming Bigger task into smaller task");
    case 4: 
            console.log("Thursday - Execution Day");
    case 5:
            console.log("Friday - Completion Day");
    case 6:
            console.log("Saturday - Submission Day");
    default:
            console.log("Invalid Day");
}