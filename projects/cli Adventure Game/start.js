import inquirer from "inquirer";
import chalk from "chalk";
import { Player, Opponent } from "./players.js";
export async function start() {
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: chalk.bgYellow.whiteBright("Enter Player Name : "),
        validate: (input) => {
            // Check if the input is not empty and contains only letters
            if (input.trim() === "") {
                return "Player name cannot be empty.";
            }
            if (!/^[a-zA-Z]+$/.test(input)) {
                return "Player name must contain only letters.";
            }
            return true; // Validation passed
        }
    });
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: chalk.bgYellow.whiteBright("\nSelect Your Opponent Player :"),
        choices: ["Bilal Fareed", "Atia Khan", "Hamzah Syed"]
    });
    let player1 = new Player(player.name); // User Player Name
    let opponentPlayer = new Opponent(opponent.select); // Computer Player Name
    let drinkPortionUsed = false; // Flag to track if drink portion has been used
    console.log(chalk.bold.green(`\n${player1.name} fuel is ${player1.fuel} `) + " VS " + chalk.bold.green(` ${opponentPlayer.name} fuel is ${opponentPlayer.fuel} `));
    do { // Loop Attack when game win or loss
        let ask = await inquirer.prompt({
            type: "list",
            name: "play",
            message: chalk.bgYellow.whiteBright("\nLet's Fight :"),
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        switch (ask.play) {
            case "Attack":
                let OponentPlayAuto = Math.floor(Math.random() * 2); // computer player system generate number 
                if (OponentPlayAuto > 0) {
                    player1.fuelDecrease();
                    console.log(chalk.bold.green(`\n${player1.name} fuel is ${chalk.bgRed.whiteBright(player1.fuel)}`) + " VS " + chalk.bold.green(`${opponentPlayer.name} fuel is ${opponentPlayer.fuel}`) + "");
                    if (player1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Lose, Better Luck Next Time"));
                        process.exit();
                    }
                }
                if (OponentPlayAuto <= 0) {
                    opponentPlayer.fuelDecrease();
                    console.log(chalk.bold.green(`\n${player1.name} fuel is ${player1.fuel}`) + " VS " + chalk.bold.green(`${opponentPlayer.name} fuel is ${chalk.bgRed.whiteBright(opponentPlayer.fuel)}`) + "");
                    if (opponentPlayer.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Win!"));
                        process.exit();
                    }
                }
                break;
            case "Drink Portion":
                if (!drinkPortionUsed) { // Check if drink portion has not been used yet
                    player1.fuelIncrease();
                    console.log(chalk.bold.italic.green(`\nYou drank a health portion. Your fuel is ${player1.fuel}`));
                    drinkPortionUsed = true; // Set the flag to true to indicate drink portion has been used
                }
                else {
                    console.log(chalk.bold.italic.red("You've already used the drink portion. It's not effective anymore."));
                }
                break;
            case "Run For Your Life...":
                console.log(chalk.red.bold.italic("\nYou Loose, Better Luck Next Time"));
                process.exit();
                break;
        }
    } while (true);
}
