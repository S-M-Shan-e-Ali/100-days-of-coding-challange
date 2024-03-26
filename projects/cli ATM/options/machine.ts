import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { User} from "./userData.js";
import { atmFunc } from "./atmfunction.js";
export {atmMachine}


// ATM Machine Login
const atmMachine =async function (){

    let res = await inquirer.prompt({
        name : "userPin",
        type: "input",
        message : chalk.green("\nPlease Enter your 4 digit PIN\t: "),
    })

    if(res.userPin == User.pin){
        console.log("\nThank you for Login SMSALI Bank")    
        console.log(`\nYour Account Name\t: ${User.name}  \nYour Account Number\t: ${User.accountNumber}\n`);
        
        atmFunc();
        return;
    } else
        console.log(chalk.red("\t\t\nInvalid User PIN"));
    
    let res1= await inquirer.prompt(
        {
          name:"again",
          type: "confirm",
          message:"\nWhat Do You Want, Try Again\t: ",
        }
    )
        if(res1.again){
            atmMachine();
        }
        
}

