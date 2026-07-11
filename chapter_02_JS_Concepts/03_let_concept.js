let a = 10;
console.log(a); // simple code --> no compilation or optimization required

for (let i = 0; i < 10000; i++) {
    console.log(i); // complex code --> requires compilation and optimization
}

function badCodeFn(){
    console.log("This is a bad code function");
}