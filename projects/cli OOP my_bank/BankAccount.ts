
import { IBankAccount } from './IBankAccount.js';
import { Customer } from './Customer.js';

export class BankAccount implements IBankAccount {
    public accNumber: number;
    public balance: number = 0;
    public customer: Customer;

    constructor(accNumber: number, customer: Customer) {
        this.accNumber = accNumber;
        this.customer = customer;
    }

    debit(amount: number): string {
        if (this.balance < amount) {
            return 'Transaction cancelled: insufficient funds.';
        }
        this.balance -= amount;
        return `Transaction successful: ${amount} debited.`;
    }

    credit(amount: number): void {
        this.balance += amount;
        if (amount > 100) {
            this.balance -= 1; // Deduct $1 if more than $100 is credited
        }
    }

    getBalance(): number {
        return this.balance;
    }
}
