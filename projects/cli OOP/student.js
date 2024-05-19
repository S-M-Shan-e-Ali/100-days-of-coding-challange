class Student {
    constructor() {
        this._name = '';
    }
    // Getter for name
    get name() {
        return this._name;
    }
    // Setter for name
    set name(value) {
        this._name = value;
    }
}
export { Student };
