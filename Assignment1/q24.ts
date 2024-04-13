let subject1 = 'maths'
let subject2 = 'maths'
let subject3 = 'science'
let personalName = "Ehtesham"
let num1 : number = 12;
let num2 : number =24;
let arr : number[] = [1,3,5,7,9,11]


//equality test

console.log("Equality Test");
console.log(subject1 == subject2)

//inequality test

console.log("Inequality Test")
console.log(subject1 !== subject2);

//test using lowercase function

console.log("Test using lower case function");
console.log(subject2.toLowerCase() == "maths")

//numerical tests
console.log("Numerical tests:")
console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)

//test using and

console.log("Test using AND(&&) operator")
console.log(subject1 == "maths" && subject3 == "science")

//test using or

console.log("Test using OR(||) operator")
console.log(num1 >= 10 || num2 <= 12)


//testing whether a number is present in array 
console.log("Is '3' part of an array:");
console.log(arr.includes(3));

//testing whether a number is not present in array 
console.log("Is '8' part of an array:");
console.log(arr.includes(8));
