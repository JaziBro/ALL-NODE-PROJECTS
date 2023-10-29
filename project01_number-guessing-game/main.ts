import inquirer from "inquirer";
import chalk from "chalk"

const answers = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "You have 10 tries to guess my number b/w 1 to 10. Good Luck!"
    }
])

for(let i = 1; i < 10; i++){
    let computerGuess = Math.floor(Math.random()*10)

if(computerGuess != answers.userGuess){
    console.log(chalk.redBright("Incorrect! Try Again"))
    let answers2 = await inquirer.prompt([
        {
            name: "userGuess",
            type: "number",
            message: "You have 10 tries to guess my number b/w 1 to 10. Good Luck!"
        }
    ])

if(computerGuess === answers2.userGuess){
        console.log(chalk.blueBright("Congratulations! You Win"))
        process.exit()
    }
}
}


