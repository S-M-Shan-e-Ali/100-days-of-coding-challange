#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start Guess The Number Game.\n\n');
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.blueBright(`\t\t\tGuess Any Number From 1 to 100\n`));
}
await welcome();
startAgain();
async function askQuestion() {
    const systemGeneratioNo = Math.floor(Math.random() * 10);
    const answers = await inquirer.prompt({
        type: "number",
        name: "userGuess",
        message: chalk.greenBright("\n\t\t\tEnter The Number Between 1-10 :")
    });
    const { userGuess } = answers;
    if (userGuess === systemGeneratioNo) {
        console.log(chalk.red.bold("\n\t\t\tYaa Your answer is correct \t You Win!"));
    }
    else {
        console.log(chalk.yellow(`\n\t\t\tPlease try again Better luck next time!. Actual number is ${systemGeneratioNo}\n`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "list",
            choices: ["\t\t\t\t\t\t\t\t\t  Yes", "\t\t\t\t\t\t\t\t\t  No"],
            name: "restart",
            message: "\n\t\t\tDo you want to Play again?? Select y or n: "
        });
    } while (again.restart == "\t\t\t\t\t\t\t\t\t  Yes");
    console.log(chalk.red("\n\t\t\tThank you for Playing Guess The Number Game."));
}
