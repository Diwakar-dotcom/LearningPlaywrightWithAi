var a = 10;
console.log(a); // 10
// Var - Function Scoped(), Traitor

// var is traitor why ? - because it is function scoped not block scoped.
// Let's understand with below example:

// Define
function printHello(){
    console.log("Hello TheTestingAcademy");
    var a = 20; // var is assigned
    console.log(a); // 20
    if(true){
        var a = 30; // here var a is redeclared with re-assinged but let and const won't allow this in same scope
        console.log(a); // 30
    }
    console.log(a); //30 - why? because it is function scoped - when var a is redclared and re-assigned at line no. 14 and its new value is 30 and its a function scoped. that means whatever comes it way it will simply

}

printHello();


// let - Block Scoped

let b =20; // Global Scope 
console.log(b); //  20

function printHello(){
        console.log("Hello TheTestingAcademy!");
        let b = 30; // Local Scope
        console.log(b); // 30
        if(true){
            let b = 5;
            console.log(b); // 5
        }
        console.log("let ->",b);   // 30
}

// Calling of the function
printHello();
console.log(b);

// // Let does not allow you to have a re-declaration. 
// // let a = 10;
// // let a = 10;


// // var allow you to have a re-declaration 
// var a =11;
// var a = 100;

// // let nn = "Pramod";
// // var nn = "Pramod"; 

// const pi = 3.14;
// console.log(pi);
// pi = 3.14159; // Assignment to constant variable.

// {

// }


// const a = [1,2,3];
// a.push(10);


// function adasd(){

// }