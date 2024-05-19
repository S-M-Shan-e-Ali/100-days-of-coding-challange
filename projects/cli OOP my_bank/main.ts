import inquirer from 'inquirer';
import { Customer } from './Customer.js';
import { BankAccount } from './BankAccount.js';
import { Bank } from './Bank.js';


// Initialize the Bank
const bank = new Bank();

export async function main() {
    while (true) {
        const { action } = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'Choose an action:',
            choices: ['Add Customer', 'View Customers', 'Update Customer', 'Delete Customer', 'Add Account', 'Manage Account', 'Exit']
        });

        if (action === 'Add Customer') {
            console.clear();
            const customerData = await inquirer.prompt([
                { name: 'firstName', type: 'input', message: 'First Name:' },
                { name: 'lastName', type: 'input', message: 'Last Name:' },
                { name: 'pin', type: 'input', message: 'PIN:' },
                { name: 'gender', type: 'input', message: 'Gender:' },
                { name: 'age', type: 'input', message: 'Age:', validate: input => !isNaN(Number(input)) || 'Please enter a valid number' },
                { name: 'mobileNumber', type: 'input', message: 'Mobile Number:' },
            ]);
            const customer = new Customer(customerData.firstName, customerData.lastName, customerData.pin, customerData.gender, Number(customerData.age), customerData.mobileNumber);
            bank.addCustomer(customer);
            console.log('Customer added successfully.');
        } else if (action === 'View Customers') {
            console.clear();
            while (true) {
                const customerChoices = bank.customer.map((customer, index) => ({
                    name: `${customer.firstName} ${customer.lastName}`,
                    value: index
                }));

                customerChoices.push({ name: 'Return Back', value: -1 });

                if (customerChoices.length === 1) {
                    console.log('No customers available.');
                    break;
                }

                const { customerIndex } = await inquirer.prompt({
                    name: 'customerIndex',
                    type: 'list',
                    message: 'Select a customer to view details:',
                    choices: customerChoices
                });

                if (customerIndex === -1) {
                    break;
                }

                console.clear();
                const { customer, accounts } = bank.getCustomerDetails(customerIndex);
                console.log(`Customer Details:
                First Name: ${customer.firstName}
                Last Name: ${customer.lastName}
                PIN: ${customer.pin}
                Gender: ${customer.gender}
                Age: ${customer.age}
                Mobile Number: ${customer.mobileNumber}
            `);

                console.log('Account Details:');
                accounts.forEach(account => {
                    console.log(`  Account Number: ${account.accNumber}
  Balance: $${account.balance}`);
                });
            }
        } else if (action === 'Update Customer') {
            console.clear();
            const customerChoices = bank.customer.map((customer, index) => ({
                name: `${customer.firstName} ${customer.lastName}`,
                value: index
            }));

            if (customerChoices.length === 0) {
                console.log('No customers available.');
                continue;
            }

            const { customerIndex } = await inquirer.prompt({
                name: 'customerIndex',
                type: 'list',
                message: 'Select a customer to update:',
                choices: customerChoices
            });

            const updatedCustomerData = await inquirer.prompt([
                { name: 'firstName', type: 'input', message: 'First Name:', default: bank.customer[customerIndex].firstName },
                { name: 'lastName', type: 'input', message: 'Last Name:', default: bank.customer[customerIndex].lastName },
                { name: 'pin', type: 'input', message: 'PIN:', default: bank.customer[customerIndex].pin },
                { name: 'gender', type: 'input', message: 'Gender:', default: bank.customer[customerIndex].gender },
                { name: 'age', type: 'input', message: 'Age:', default: bank.customer[customerIndex].age, validate: input => !isNaN(Number(input)) || 'Please enter a valid number' },
                { name: 'mobileNumber', type: 'input', message: 'Mobile Number:', default: bank.customer[customerIndex].mobileNumber },
            ]);
            const updatedCustomer = new Customer(updatedCustomerData.firstName, updatedCustomerData.lastName, updatedCustomerData.pin, updatedCustomerData.gender, Number(updatedCustomerData.age), updatedCustomerData.mobileNumber);
            bank.updateCustomer(customerIndex, updatedCustomer);
            console.log('Customer updated successfully.');
        } else if (action === 'Delete Customer') {
            console.clear();
            const customerChoices = bank.customer.map((customer, index) => ({
                name: `${customer.firstName} ${customer.lastName}`,
                value: index
            }));

            if (customerChoices.length === 0) {
                console.log('No customers available.');
                continue;
            }

            const { customerIndex } = await inquirer.prompt({
                name: 'customerIndex',
                type: 'list',
                message: 'Select a customer to delete:',
                choices: customerChoices
            });

            bank.deleteCustomer(customerIndex);
            console.log('Customer deleted successfully.');
        } else if (action === 'Add Account') {
            console.clear();
            const customerChoices = bank.customer.map((customer, index) => ({
                name: `${customer.firstName} ${customer.lastName}`,
                value: index
            }));

            if (customerChoices.length === 0) {
                console.log('No customers available.');
                continue;
            }

            const { customerIndex, accNumber } = await inquirer.prompt([
                {
                    name: 'customerIndex',
                    type: 'list',
                    message: 'Select a customer:',
                    choices: customerChoices
                },
                { name: 'accNumber', type: 'input', message: 'Account Number:', validate: input => !isNaN(Number(input)) || 'Please enter a valid number' }
            ]);
            const account = new BankAccount(Number(accNumber), bank.customer[customerIndex]);
            bank.addAccountNumber(account);
            console.log('Account added successfully.');
        } else if (action === 'Manage Account') {
            console.clear();
            const { accNumber } = await inquirer.prompt({
                name: 'accNumber',
                type: 'input',
                message: 'Enter account number:',
                validate: input => !isNaN(Number(input)) || 'Please enter a valid number'
            });
            const account = bank.account.find(acc => acc.accNumber === Number(accNumber));
            if (!account) {
                console.log('Account not found.');
                continue;
            }

            while (true) {
                
                console.log(`Account Number : ${accNumber}` + `\tAccount Holder Name : ${account.customer.firstName} ${account.customer.lastName}`)
                
                const { accountAction } = await inquirer.prompt({
                    name: 'accountAction',
                    type: 'list',
                    message: 'Choose an account action:',
                    choices: ['Check Balance', 'Debit', 'Credit', 'Back to Main Menu']
                });

                if (accountAction === 'Check Balance') {
                    console.log(`Current balance: $${account.getBalance()}`);
                } else if (accountAction === 'Debit') {
                    const { amount } = await inquirer.prompt({
                        name: 'amount',
                        type: 'input',
                        message: 'Enter the amount to debit:',
                        validate: input => !isNaN(Number(input)) || 'Please enter a valid number'
                    });
                    const message = account.debit(Number(amount));
                    console.log(message);
                    bank.transaction(account);
                } else if (accountAction === 'Credit') {
                    const { amount } = await inquirer.prompt({
                        name: 'amount',
                        type: 'input',
                        message: 'Enter the amount to credit:',
                        validate: input => !isNaN(Number(input)) || 'Please enter a valid number'
                    });
                    account.credit(Number(amount));
                    console.log(`$${amount} credited to the account.`);
                    bank.transaction(account);
                } else if (accountAction === 'Back to Main Menu') {
                    break;
                }
            }
        } else if (action === 'Exit') {
            break;
        }
    }
}
