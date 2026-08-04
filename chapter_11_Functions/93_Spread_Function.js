function add(a,b,c) { // this function would only accept initial 3 value of the array and gives us the sum.
    return a+b+c;
}

let num = [1,2,3,4];
console.log(add(...num)); // this here we are passing num array all variables to function add.
console.log(...num); // print your array elements without arr[] squarebrackets

function hasError(...codes) { // we can also have spread as a param to a function definition.
    return codes.some(code => code >= 400);
}

let responseCodes = [200, 300, 404];
console.log(hasError(...responseCodes)); // we can call a function with spread as a argument.