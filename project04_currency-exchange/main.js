#! usr/bin/env Node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var conversion = {
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
var answers = await inquirer_1.default.prompt([
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
var from = answers.from, to = answers.to, amount = answers.amount;
if (from && to && amount) {
    var result = conversion[from][to] * amount;
    console.log("The conversion amount of ".concat(amount, " ").concat(from, " to ").concat(to, " is ").concat(result));
}
