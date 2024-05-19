import { Customer } from './Customer.js';
import { IBankAccount } from './IBankAccount.js';


export class Bank {
    customer: Customer[] = [];
    account: IBankAccount[] = [];

    addCustomer(obj: Customer) {
        this.customer.push(obj);
    }

    addAccountNumber(obj: IBankAccount) {
        this.account.push(obj);
    }

    updateCustomer(index: number, updatedCustomer: Customer) {
        this.customer[index] = updatedCustomer;
    }

    deleteCustomer(index: number) {
        this.customer.splice(index, 1);
    }

    transaction(accobj: IBankAccount) {
        let NewAccounts = this.account.filter(acc => acc.accNumber !== accobj.accNumber);
        this.account = [...NewAccounts, accobj];
    }

    getCustomerDetails(index: number): { customer: Customer, accounts: IBankAccount[] } {
        const customer = this.customer[index];
        const accounts = this.account.filter(acc => acc.customer === customer);
        return { customer, accounts };
    }
}
