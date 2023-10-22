import chalk from "chalk";
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        choices: ["A) Mount Everest", "B) K2", "C) Mount Blanc", "D) Mount Fuji"],
        message: "Which of the following is the highest Mountain on Earth: "
    },
    {
        name: "question2",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean"],
        message: "Which of the following is the largest Ocean on Earth: "
    },
    {
        name: "question3",
        type: "list",
        choices: ["A) North", "B) why would it have smoke", "C) West", "D) none of the above"],
        message: "If an electric train is travelling towards North, where will its smoke travel?: "
    },
    {
        name: "question4",
        type: "list",
        choices: ["A) Europe", "B) Asia", "C) Southern America", "D) Northern America"],
        message: "Which of the following is the largest Continent of Earth: "
    },
    {
        name: "question5",
        type: "list",
        choices: ["A) 4th", "B) 2nd", "C) 3rd", "D) None of the above"],
        message: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?: "
    },
    {
        name: "question6",
        type: "list",
        choices: ["A) Russia", "B) Portugal", "C) China", "D) India"],
        message: "Which of the following is the largest Country (by population) on Earth: "
    },
    {
        name: "question7",
        type: "list",
        choices: ["A) Amazon River", "B) River Nile", "C) Congo River", "D) Yellow River"],
        message: "Which of the following is the largest River on Earth: "
    },
    {
        name: "question8",
        type: "list",
        choices: ["A) Great Wall of China", "B) Great Pyramid", "C) Taj Mahal", "D) Time Square"],
        message: "Which of the following is not a Wonder of the World: "
    },
    {
        name: "question9",
        type: "list",
        choices: ["A) China", "B) Saudi Arabia", "C) Australia", "D) Russia"],
        message: "Which of the following is the largest Country (by area) on Earth: "
    },
    {
        name: "question10",
        type: "list",
        choices: ["A) Mars", "B) Mercury", "C) Jupiter", "D) Earth"],
        message: "Which of the following is the largest Planet: "
    },
]);
var score = 0;
if (answers.question1 === "A) Mount Everest") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question2 === "C) Pacific Ocean") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question3 === "B) why would it have smoke") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question4 === "B) Asia") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question5 === "C) 3rd") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question6 === "C) China") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question7 === "B) River Nile") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question8 === "D) Time Square") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question9 === "D) Russia") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

if (answers.question10 === "D) Earth") {
    console.log(chalk.greenBright("Correct Answer"))
    score += 1;
} else {console.log(chalk.redBright("Wrong Answer"))}

console.log(chalk.blueBright(`Your Total Score Out Of 10 is ${score}!`));
