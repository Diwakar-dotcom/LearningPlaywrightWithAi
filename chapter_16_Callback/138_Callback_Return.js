function calculate(a, b, operation) {
    return operation(a,b); // instead of just calling the callback we can also return it
}

let sum = calculate(10,5, function(x,y){
    return x+y;
});

console.log(sum);
