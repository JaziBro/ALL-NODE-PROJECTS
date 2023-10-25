#!/usr/bin/env Node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "userID",
        type: "string",
        message: "Please enter your ID: "
    },
    {
        name: "userpin",
        type: "number",
        message: "Please enter your pin: "
    },
    {
        name: "transactiontype",
        type: "list",
        choices: ["Fastcash", "Withdrawl"],
        message: "Please enter your Withdrawl Method: "
    },
    {
        name: "withdrawl",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
        message: "Please enter your amount: "
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter your amount: "
    },
]);
if (answers.userID && answers.userpin) {
    const balance = Math.round(Math.random() * 10000);
    console.log(balance);
    const enteredAmount = answers.amount;
    if (balance > enteredAmount) {
        const remaning = balance - enteredAmount;
        console.log(`Your remaning balance is ${remaning}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
