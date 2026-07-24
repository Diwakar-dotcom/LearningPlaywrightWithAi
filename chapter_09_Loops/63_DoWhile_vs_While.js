let a = 10;
while(a < 10) { // This loop body will only execute ? if condition is true else it will not never execute.
    console.log("a =",a);
    a++;
}

let b = 10;
do{ // This loop body executes atleast once ? irrespective of condition is true or false?
    console.log("b =",b);
    b++;
} while(b < 10);