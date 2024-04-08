#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "num1" },
    { message: "Enter second number: ", type: "number", name: "num2" },
    {
        message: "Enter the operation you want to perform: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Division") {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operator === "Modulus") {
    console.log(answer.num1 % answer.num2);
}
else {
    console.log("Select valid option!");
}
