#! usr/bin/env Node
import inquirer from "inquirer"
import chalk from "chalk"

class Student{
    name: string

    constructor(name: string){
        this.name = name
    }
}

class Person {
    students: Student[] = []

   addStudent(obj: Student){
       return this.students.push(obj)
    }
}
const persons = new Person()

console.log(chalk.bgBlueBright("WELCOME TO THE CHATTING APP"))

let programStart = async (persons: Person) => {
    do{
   let answer = await inquirer.prompt([
        {
            name: "chat",
            type: "list",
            message: "Who do u want to chat with? ",
            choices: ["Myself", "student"]

        }
    ])

    if(answer.chat === "Myself"){
        console.log(chalk.redBright("Hello to myself"))
    } 

    if (answer.chat === "student"){
       const answer2 = await inquirer.prompt([
        {
            type: "string",
            message: "Which student you want to chat with",
            name: "student"
        }

       ])
    
       let student = persons.students.find(val => val.name == answer.friend)

       if(!student){
        let name = new Student(answer2.student)
        persons.addStudent(name)

        console.log(chalk.cyanBright(`Hey there, I am ${name.name}`))
        console.log(persons.students)
        }
    
       if(student){
        let name = new Student(answer2.student)
        console.log(chalk.greenBright(`Hey there, I am ${name.name}, how are you?`))
        }
    }
}

while(true)

}

programStart(persons)