#! /usr/bin/env node 

import inquirer from "inquirer";

function counter(text: string){
    let freeSpace = text.replace(/\s/g,"");         // (/\s/g,"") it is used to finish spaces from the text
    return freeSpace.length;
}


let question = await inquirer.prompt({
    type:"input",
    message:"write paragraph to count words:",
    name:"paragraph",
})

let response = counter(question.paragraph)

console.log(response);