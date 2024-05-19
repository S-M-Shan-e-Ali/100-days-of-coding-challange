export class Customer {
    public firstName: string;
    public lastName: string;
    public pin: string | number;
    public gender: string;
    public age: number;
    public mobileNumber: string;

    constructor(fName: string, lName: string, pin: string | number, gender: string, age: number, mob: string) {
        this.firstName = fName;
        this.lastName = lName;
        this.pin = pin;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mob;
    }
}
