export class BankAccount {
    constructor(accNumber, customer) {
        this.balance = 0;
        this.accNumber = accNumber;
        this.customer = customer;
    }
    debit(amount) {
        if (this.balance < amount) {
            return 'Transaction cancelled: insufficient funds.';
        }
        this.balance -= amount;
        return `Transaction successful: ${amount} debited.`;
    }
    credit(amount) {
        this.balance += amount;
        if (amount > 100) {
            this.balance -= 1; // Deduct $1 if more than $100 is credited
        }
    }
    getBalance() {
        return this.balance;
    }
}
