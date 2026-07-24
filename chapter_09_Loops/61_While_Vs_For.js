// This shows how while loop is different from for loop: here you can see that it totally depends on the condition.
let age = 7;

while(true) {
    if (age > 10) { // This will not execute at 10 because ? - 10 > 10: so it will go to else.
        break;
    } else{
        console.log("Age =", age)
    }

    age++;
}