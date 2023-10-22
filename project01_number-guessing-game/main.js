import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Enter your guess between 1 1o 10"
    }
]);
let computerGuess = Math.round(Math.random() * 10);
if (computerGuess === answers.userGuess) {
    console.log(chalk.blueBright("Congratulation! You Won The Game"));
}
else {
    console.log(chalk.redBright(`The number was ${computerGuess}, You lost! Better Luck Next Time`));
}
