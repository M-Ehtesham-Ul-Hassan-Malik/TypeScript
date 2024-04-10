#! usr/bin/env Node
import inquirer from "inquirer";
let myPin = 4824;
let myBalance = 50000; //Dollars
const pinAns = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please enter your secret PIN to proceed:",
});
if (pinAns.pin === myPin) {
    console.log("Login was successful!");
    const operations = await inquirer.prompt([
        {
            name: "opr",
            type: "list",
            message: "Please select the operation you want to perform:",
            choices: [
                "Deposit Amount",
                "Withdraw Amount",
                "Check Balance",
                "Donate to NGO",
            ],
        },
    ]);
    if (operations.opr === "Deposit Amount") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter amount you want to deposit:",
            },
        ]);
        myBalance += amountAns.amount;
        console.log("your current balance is " + myBalance);
    }
    else if (operations.opr === "Withdraw Amount") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter amount you want to withdraw:",
            },
        ]);
        console.log("Withdrawl Amount: " + amountAns.amount);
        console.log("Current Balance: " + myBalance);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient funds. Withdrawal failed.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your current balance is " + myBalance);
        }
    }
    else if (operations.opr === "Check Balance") {
        console.log("your current balance is " + myBalance);
    }
    else if (operations.opr === "Donate to NGO") {
        const ngoDetails = await inquirer.prompt([
            {
                name: "ngo",
                type: "list",
                message: "Which NGO do you want to donate: ",
                choices: ["Dawat-e-Islami", "Sylani Welfare Trust", "JDC", "Muslim Hands", "Al-Mustafa Welfare Trust", "Al-Khidmat Foundation", "Baitusalam"]
            },
            {
                name: "donation",
                type: "number",
                message: "How much money do you want to donate:"
            }
        ]);
        console.log("Donation Amount: " + ngoDetails.donation);
        console.log("Current Balance: " + myBalance);
        if (ngoDetails.donation > myBalance) {
            console.log("Insufficient funds. Transfer failed.");
        }
        else {
            myBalance -= ngoDetails.donation;
            console.log("You have transfered successfully " + ngoDetails.donation + " rupees to " + ngoDetails.ngo);
            console.log("Your current balance is " + myBalance);
        }
    }
}
else {
    console.log("Incorrect PIN");
}
