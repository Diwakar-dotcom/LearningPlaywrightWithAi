// 0 - Sunday, 1 - Monday, 2 - Tue.....
// Let's understand the use case of default statement

let day = 10;

switch(day){
    case 0: 
            console.log("Sunday - Rest Day");
            break;
    case 1:
            console.log("Monday - Planning Day");
            break;
    case 2:
            console.log("Tuesday - Team member division");
            break;
    case 3: 
            console.log("Wednesday - Transforming Bigger task into smaller task");
            break;
    case 4: 
            console.log("Thursday - Execution Day");
            break;
    case 5:
            console.log("Friday - Completion Day");
            break;
    case 6:
            console.log("Saturday - Submission Day");
            break;
    default:
            console.log("Invalid Day");
}