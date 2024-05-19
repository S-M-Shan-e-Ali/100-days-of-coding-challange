import { Customer } from "./Customer.js";

export interface IBankAccount {
    accNumber: number;
    balance: number;
    customer: Customer;

    debit(amount: number): string;
    credit(amount: number): void;
    getBalance(): number;
}
