#!/usr/bin/env Node
import { sum } from "./add.js";
import { sum2 } from "./subtract.js";
import { sum3 } from "./multiply.js";
import { sum4 } from "./divide.js";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter your first number",
        type: "number"
    },
    {
        name: "num2",
        message: "Enter you second number",
        type: "number"
    },
    {
        name: "operator",
        message: "Enter the operator",
        choices: ["+", "-", "*", "/"],
        type: "list"
    }
]);
if (answers.operator === "+") {
    const result = sum(answers.num1, answers.num2);
    console.log(`result is ${result}`);
}
else if (answers.operator === "-") {
    const result = sum2(answers.num1, answers.num2);
    console.log(`result is ${result}`);
}
else if (answers.operator === "*") {
    const result = sum3(answers.num1, answers.num2);
    console.log(`result is ${result}`);
}
else if (answers.operator === "/") {
    const result = sum4(answers.num1, answers.num2);
    console.log(`result is ${result}`);
}
