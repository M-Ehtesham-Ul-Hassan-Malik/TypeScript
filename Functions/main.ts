/*
function myName(){
    return "M Ehtesham Ul Hassan Malik";
}
console.log(myName());



function sum(){
    return 2+2;
}
console.log(sum());

*/


//Basic functions of calculator
function sum(num1: number, num2: number){
    return num1+num2;       //addition
}
console.log(sum(8,8));

function sub(num1: number, num2: number){
    return num1-num2;       //subtraction
}
console.log(sub(20,8));

function prod(num1: number, num2: number){
    return num1*num2;       //multiplication
}
console.log(prod(8,8));

function div(num1: number, num2: number){
    return num1/num2;       //division
}
console.log(div(8,8));

function pow(num1: number, num2: number){
    return num1**num2;      //power
}
console.log(pow(8,8));

function reminder(num1: number, num2: number){
    return num1%num2;
}
console.log(reminder(10,8));    //reminder after division


// default parameter function

function addition(a: number, b = 10){  
    return a+b; //here b is default parameter and its value is 10.
}
console.log(addition(12));

function greet(m1: string, m2 = "World"){  
    return m1+m2; //here b is default parameter and its value is 10.
}
console.log(greet("Hello "));