
class Student {
    // Private field to hold the name
    private _name: string;

    constructor() {
        this._name = '';
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(value: string) {
        this._name = value;
    }
}

export { Student };


