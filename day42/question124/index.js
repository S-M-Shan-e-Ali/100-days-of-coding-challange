/*  Question : 124
        Create a function inside an object that returns the object's own name property using the this keyword.

        Explain & TIP : The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.
*/
// Defines an object with a name property and a method to return its name
var person = {
    name: "Alice",
    getName: function () {
        return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName()); // Outputs: Alice
// This method correctly identifies and returns the object's 'name' property using 'this'.
