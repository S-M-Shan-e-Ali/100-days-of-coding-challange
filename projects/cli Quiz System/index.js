#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { quiz } from "./questions.js";
import { takeQuiz } from "./functions.js";
console.clear();
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start The TypeScript QUIZ SYSTEM.\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let ask = await inquirer.prompt({
    type: "list",
    name: "start",
    message: "Select Any One",
    choices: ["Start Basic TypeScript Quiz", "Exit"]
});
switch (ask.start) {
    case "Start Basic TypeScript Quiz":
        // Run this quiz
        takeQuiz(quiz);
        break;
    case "Exit":
        process.exit();
}
