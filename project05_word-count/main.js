#! usr/bin/env Node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Please enter your sentence for word count:"
    }
]);
let wordCount = answers.Sentence.trim().split(" ");
console.log(`Total wordcount for your sentence is ${wordCount.length}`);
