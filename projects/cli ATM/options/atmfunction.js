import inquirer from "inquirer";
import chalk from "chalk";
import { User } from "./userData.js";
export { atmFunc };
// create Atm machine function
const atmFunc = async function () {
    const ans = await inquirer.prompt({
        name: "TransactionType",
        type: "list",
        choices: ["FastCash", "WithDraw", "Balance", "Exit"],
        message: chalk.green("Select Your Option : "),
    });
    switch (ans.TransactionType) {
        // FastCash Service
        case "FastCash":
            const ans1 = await inquirer.prompt([{
                    name: "FastCash",
                    type: "list",
                    choices: [2000, 5000, 10000, 20000],
                    message: chalk.green("Select Your Transaction Amount : "),
                },]);
            if (ans1.FastCash >= User.balance) {
                console.log(chalk.red("Current balance is insufficient"));
            }
            else {
                console.log("FastCash Transaction amount is " + ans1.FastCash);
                console.log("Previous Balance :" + User.balance);
                User.balance -= ans1.FastCash;
                console.log("Remaining Balance :" + User.balance);
            }
            atmFunc();
            break;
        // WithDraw Amount
        case "WithDraw":
            const ans2 = await inquirer.prompt([{
                    name: "WithDraw",
                    type: "input",
                    message: chalk.green("Select Your Transaction Amount : "),
                },]);
            if (ans2.WithDraw >= User.balance) {
                console.log(chalk.red("Current balance is insufficient"));
            }
            else if (ans2.WithDraw > 25000) {
                console.log(chalk.red("You have Cross Transaction Limits"));
            }
            else {
                console.log("FastCash Transaction amount is " + ans2.WithDraw);
                console.log("Previous Balance :" + User.balance);
                User.balance -= ans2.WithDraw;
                console.log("Remaining Balance :" + User.balance);
            }
            atmFunc();
            break;
        // Balance Check   
        case "Balance":
            console.log("Your Balance is :" + User.balance);
            atmFunc();
            break;
    }
};
