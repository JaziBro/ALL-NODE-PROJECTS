#! usr/bin/env Node
import inquirer from "inquirer";
let todos = [];
let answers;
let loop = true;
while (loop) {
    let answers = await inquirer.prompt([
        {
            name: "todo",
            type: "string",
            message: "Enter What To Do"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more tasks? ",
            default: false
        }
    ]);
    const { todo, addmore } = answers;
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
}
console.log(todos);
if (todos.length > 0) {
    console.log("Here is your todo list: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
