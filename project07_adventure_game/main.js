#! usr/bin/env Node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    healthIncrease() {
        this.fuel = 100;
    }
    healthDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class Opponent extends Player {
}
var answers = await inquirer.prompt([
    {
        name: "playername",
        type: "input",
        message: "Please enter your name: "
    },
    {
        name: "opponentname",
        type: "list",
        choices: ["Skeleton", "Assasin", "Monster"],
        message: "Please select your opponent: "
    },
]);
let p1 = new Player(answers.playername);
let opp1 = new Opponent(answers.opponentname);
do {
    if (answers.opponentname === "Skeleton") {
        var answer2 = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Drink Potion", "Run For Your Life"],
                message: "Please select your action: "
            }
        ]);
        if (answer2.action === "Attack") {
            let num = Math.round(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.redBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright(`You loose, Better Luck Next Time!`));
                process.exit();
            }
            else if (num <= 0) {
                opp1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.redBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (opp1.fuel <= 0) {
                console.log(chalk.greenBright(`Congratulations! You Win`));
                process.exit();
            }
        }
        if (answer2.action === "Drink Potion") {
            p1.healthIncrease();
            console.log(chalk.blueBright.bold(`${answers.playername}'s health is now ${p1.fuel}`));
        }
        if (answer2.action === "Run For Your Life") {
            console.log(chalk.redBright(`You lost, Better Luck Next Time!`));
            process.exit();
        }
    }
    if (answers.opponentname === "Assasin") {
        var answer2 = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Drink Potion", "Run For Your Life"],
                message: "Please select your action: "
            }
        ]);
        if (answer2.action === "Attack") {
            let num = Math.round(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.magentaBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright(`You loose, Better Luck Next Time!`));
                process.exit();
            }
            else if (num <= 0) {
                opp1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.magentaBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (opp1.fuel <= 0) {
                console.log(chalk.greenBright(`Congratulations! You Win`));
                process.exit();
            }
        }
        if (answer2.action === "Drink Potion") {
            p1.healthIncrease();
            console.log(chalk.blueBright.bold(`${answers.playername}'s health is now ${p1.fuel}`));
        }
        if (answer2.action === "Run For Your Life") {
            console.log(chalk.redBright(`You lost, Better Luck Next Time!`));
            process.exit();
        }
    }
    if (answers.opponentname === "Monster") {
        var answer2 = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Drink Potion", "Run For Your Life"],
                message: "Please select your action: "
            }
        ]);
        if (answer2.action === "Attack") {
            let num = Math.round(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.cyanBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright(`You loose, Better Luck Next Time!`));
                process.exit();
            }
            else if (num <= 0) {
                opp1.healthDecrease();
                console.log(chalk.blueBright.bold(`${answers.playername}'s health is ${p1.fuel}`));
                console.log(chalk.cyanBright.bold(`${answers.opponentname}'s health is ${opp1.fuel}`));
            }
            if (opp1.fuel <= 0) {
                console.log(chalk.greenBright(`Congratulations! You Win`));
                process.exit();
            }
        }
        if (answer2.action === "Drink Potion") {
            p1.healthIncrease();
            console.log(chalk.blueBright.bold(`${answers.playername}'s health is now ${p1.fuel}`));
        }
        if (answer2.action === "Run For Your Life") {
            console.log(chalk.redBright(`You lost, Better Luck Next Time!`));
            process.exit();
        }
    }
} while (true);
