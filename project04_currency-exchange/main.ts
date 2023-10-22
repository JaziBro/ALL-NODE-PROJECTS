#! usr/bin/env Node

import inquirer from "inquirer";
let conversion: any = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0034,
        "INR": 0.29
    },
    "USD": {
        "USD": 1,
        "PKR": 290.50,
        "INR": 83.29
    },
    "INR": {
        "INR": 1,
        "USD": 0.012,
        "PKR": 3.49
    }
};

let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "INR"],
        message: "Choose the Currency you want to convert from: "
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "INR"],
        message: "Choose the Currency you want to convert to: "
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount: "
    },
]);

const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`The conversion amount of ${amount} ${from} to ${to} is ${result}`);
}
