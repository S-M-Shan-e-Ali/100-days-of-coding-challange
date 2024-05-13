import chalk from "chalk";
import inquirer from "inquirer";

export async function start() {
    let shouldExit = false;

    do {
        let ask = await inquirer.prompt({
            type: "list",
            name: "rep",
            message: "\nSelect Any One",
            choices: ["Character Count", "Word Count", "Character & Word Count", "Exit"]
        });

        if (ask.rep === "Exit") {
            shouldExit = true;
        } else {
            let paragraph = await inquirer.prompt({
                type: "input",
                name: "para",
                message: chalk.red("\nWrite A Paragraph.\n"),
                validate: (input: string) => input.trim().length > 0 || "Please enter a paragraph",
            });

            let text = paragraph.para;
            // Remove whitespace from the text
            const textWithoutWhitespace = text.replace(/\s/g, '');

            // Count characters (including letters, digits, symbols)
            const characterCount: number = textWithoutWhitespace.length;

            // Count words (assuming words are separated by whitespace)
            const words: string[] = text.split(/\s+/);
            const wordCount: number = words.length;

            switch (ask.rep) {
                case "Character Count":
                    console.log("\nCharacter count:", characterCount);
                    break;
                case "Word Count":
                    console.log("\nWord count :", wordCount);
                    break;
                case "Character & Word Count":
                    console.log("\nCharacter count:", characterCount);
                    console.log("Word count :", wordCount);
                    break;
            }
        }
    } while (!shouldExit);
}
