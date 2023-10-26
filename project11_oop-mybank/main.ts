import { faker, ja } from "@faker-js/faker"
import inquirer from "inquirer"
import chalk from "chalk"

class Customer {
    firstName: string
    lastName: string
    age: number
    gender: string
    contactNum: number
    accNumber: number

constructor(firstName: string,lastName: string, age: number, gender: string , contactNum: number, accNumber: number){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.contactNum = contactNum
    this.accNumber = accNumber
    }
}

interface BankAccount {
    accNumber: number
    balance: number
}

class Bank {
    customers: Customer[] = []
    accounts: BankAccount[] = []

    addCustomer(obj:Customer){
        this.customers.push(obj)
    }
    addAccountNumber(obj: BankAccount){
        this.accounts.push(obj)
    }
    transaction(accObj: BankAccount){
        let NewAccounts = this.accounts.filter(acc => acc.accNumber !== accObj.accNumber)
        this.accounts = [...NewAccounts, accObj]
    }
}

let jazilBank = new Bank()

for(let i = 1; i <= 3; i++){
    let firstName = faker.person.firstName("male")
    let lastName = faker.person.lastName("male")
    let mobileNum = parseInt(faker.phone.number())
    let customer = new Customer(firstName, lastName, 15 * i, "male", mobileNum, 1000 + i)
    jazilBank.addCustomer(customer)
    jazilBank.addAccountNumber({accNumber: customer.accNumber, balance: 500 * i})
}

async function bankService(bank: Bank) {
    let answer = await inquirer.prompt([
        {
            name: "service",
            type: "list",
            message: "Please Select Your Desired Service: ",
            choices: ["View Balance", "Cash Withdrawl", "Cash Deposit"]
        }
    ])
// View Balance
    if(answer.service === "View Balance"){
        let response = await inquirer.prompt([
            {
                name: "accnum",
                type: "input",
                message: "Please Enter Your Account Number: "
            }
        ])

        let account = jazilBank.accounts.find((acc) => acc.accNumber == response.accnum)
        if(!account){
            console.log(chalk.redBright.italic("Invalid Account Number"))
        } else if (account){
            let name = jazilBank.customers.find(
                (item) => item.accNumber == account?.accNumber
            )
            console.log(`Dear ${chalk.greenBright.italic(name?.firstName)} ${chalk.greenBright.italic(name?.lastName)} Your Account Balance is ${chalk.bold.blue(`$${account.balance}`)}` )
                }
            }

// Cash Withdrawl
   if(answer.service === "Cash Withdrawl"){
    let response = await inquirer.prompt([
        {
            name: "accnum",
            type: "input",
            message: "Please Enter Your Account Number: "
        }
    ])

    let account = jazilBank.accounts.find((acc) => acc.accNumber == response.accnum)
    if(!account){
        console.log(chalk.redBright.italic("Invalid Account Number"))
    } 
    else if (account){
        let response2 = await inquirer.prompt([
            {
                type: "input",
                message: `Please Enter Your Amount To Withdraw`,
                name: "amount"
            }
        ])
        if(response2.amount > account.balance){
            console.log(chalk.red(`Your Current Balance is insufficient to withdraw`))
        } 
        else {
        let newBalance =  account.balance - response2.amount
        bank.transaction({accNumber: account.accNumber, balance: newBalance})
        console.log(chalk.yellow(`Your Remaining Balance is` ,`$${newBalance}`))
        }
         }
    }

    // Cash Deposit
    if(answer.service === "Cash Deposit"){
        let response = await inquirer.prompt([
            {
                name: "accnum",
                type: "input",
                message: "Please Enter Your Account Number: "
            }
        ])
    
        let account = jazilBank.accounts.find((acc) => acc.accNumber == response.accnum)
        if(!account){
            console.log(chalk.redBright.italic("Invalid Account Number"))
        } 
        else if (account){
            let response3 = await inquirer.prompt([
                {
                    type: "input",
                    message: `Please Enter Your Amount To Deposit: `,
                    name: "amount"
                }
            ])
    
            let newBalance = account.balance + response3.amount
            bank.transaction({accNumber: account.accNumber, balance: newBalance})
            console.log(chalk.yellow(`Your New Balance is` ,`$${newBalance}`))
             }
        }
}

bankService(jazilBank)