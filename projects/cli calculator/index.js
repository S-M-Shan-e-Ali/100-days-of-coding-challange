import inquirer from 'inquirer';
async function calculator() {
    while (true) {
        const { num1, operation, num2 } = await inquirer.prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number:',
                validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number!',
            },
            {
                type: 'list',
                name: 'operation',
                message: 'Select operation:',
                choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number:',
                validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number!',
            },
        ]);
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let result;
        switch (operation) {
            case 'Add':
                result = n1 + n2;
                break;
            case 'Subtract':
                result = n1 - n2;
                break;
            case 'Multiply':
                result = n1 * n2;
                break;
            case 'Divide':
                if (n2 === 0) {
                    console.log('Error: Cannot divide by zero');
                    return;
                }
                result = n1 / n2;
                break;
        }
        console.log(`Result: ${result}`);
        const { again } = await inquirer.prompt({
            type: 'confirm',
            name: 'again',
            message: 'Do you want to perform another calculation?',
        });
        if (!again) {
            console.log('Exiting...');
            break;
        }
    }
}
calculator().catch((error) => console.error('Error:', error));
