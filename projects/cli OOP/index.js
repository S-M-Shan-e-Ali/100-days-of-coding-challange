#! /usr/bin/env node
import inquirer from 'inquirer';
import { Person } from './person.js';
import { Student } from './student.js';
class Program {
    static async main() {
        let againstart = true;
        do {
            console.clear();
            console.log("\n\t\t\tObject-Oriented Programming (OOP)\n");
            // Ask for personality type with validation
            const personalityInput = await inquirer.prompt({
                name: 'input',
                type: 'input',
                message: 'Type 1 if you like to talk to others, type 2 if you would rather keep to yourself:',
                validate: (input) => {
                    const parsed = parseInt(input);
                    if (isNaN(parsed)) {
                        return 'Please Enter Number';
                    }
                    return true;
                }
            });
            const answer = parseInt(personalityInput.input);
            const myPerson = new Person();
            myPerson.askQuestion(answer);
            console.log(`You are: ${myPerson.getPersonality()}`);
            // Ask for name
            const nameInput = await inquirer.prompt({
                name: 'name',
                type: 'input',
                message: 'What is your name?',
            });
            const myStudent = new Student();
            myStudent.name = nameInput.name;
            console.log(`Your Name is: ${myStudent.name} and your personality type is: ${myPerson.getPersonality()}`);
            let again = await inquirer.prompt({
                type: "list",
                name: "again",
                message: "\nDo you start again?",
                choices: ["Start", "Exit"]
            });
            again.again == "Start" ? againstart = true : againstart = false;
        } while (againstart);
    }
}
Program.main();
