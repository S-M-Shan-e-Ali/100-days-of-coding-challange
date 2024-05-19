export class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    updateCustomer(index, updatedCustomer) {
        this.customer[index] = updatedCustomer;
    }
    deleteCustomer(index) {
        this.customer.splice(index, 1);
    }
    transaction(accobj) {
        let NewAccounts = this.account.filter(acc => acc.accNumber !== accobj.accNumber);
        this.account = [...NewAccounts, accobj];
    }
    getCustomerDetails(index) {
        const customer = this.customer[index];
        const accounts = this.account.filter(acc => acc.customer === customer);
        return { customer, accounts };
    }
}
