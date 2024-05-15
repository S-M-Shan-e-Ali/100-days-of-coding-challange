import inquirer from 'inquirer';
import { CountdownTimer } from "./class.js";
export async function start() {
    const validateDigits = (input) => {
        if (input.trim() === '') {
            return true; // Allow empty input
        }
        const isValid = /^\d+$/.test(input);
        return isValid || 'Enter Only Digits Number.';
    };
    console.log("\nSet Your Countdown Timer!\n");
    const response = await inquirer.prompt([{
            type: 'input',
            name: 'days',
            message: 'Enter number of Days:',
            validate: validateDigits,
        }, {
            type: 'input',
            name: 'hours',
            message: 'Enter number of Hours:',
            validate: validateDigits
        }, {
            type: 'input',
            name: 'minutes',
            message: 'Enter number of Minutes:',
            validate: validateDigits
        }, {
            type: 'input',
            name: 'seconds',
            message: 'Enter number of Seconds:',
            validate: validateDigits
        }]);
    const { days, hours, minutes, seconds } = response;
    const endTime = new Date(new Date().getTime() + (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    const timer = new CountdownTimer(endTime);
    timer.start();
}
