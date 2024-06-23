#! /usr/bin/env node
import inquirer from "inquirer";
//step 1 ==> generate number from computer
//step 2 ==> get user input for guess
//step 3 ==> compare user input with computer generated number
const computerGenrated = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Please guess the number between 1 to 10:",
    },
]);
if (answer.guessNumber === computerGenrated) {
    console.log("Congrates! you guess the right number.");
}
else {
    console.log("Oops! you guess wrong number.");
    console.log(`The correct number was ${computerGenrated}`);
}
