#! usr/bin/env/node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: "Enter your number of seconds: ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid input";
            }
            else if (input > 60) {
                return "Seconds must be under 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = answers.userInput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    let intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const mins = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${mins.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
