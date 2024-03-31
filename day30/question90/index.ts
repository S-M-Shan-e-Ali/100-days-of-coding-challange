/* Question : 90
        Checking if a Value is NaN: Demonstrate how to check if a variable's value in NaN(Not a Number) and return a boolean result.

        Explain & TIP :  isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.
*/

// This function checks if a value is Not a Number (NaN)
function isValueNaN(value : any): boolean{
    return isNaN(value);        // Checks and returns true if the value is NaN, false otherwise
}

// Checking different values
console.log(isValueNaN("hello"));       // Outputs: true, because "hello" isn't a number.
console.log(isValueNaN(123));           // Outputs: false, because 123 is a number.

// This way, we can guard against unexpected non-numeric values in our calculations or inputs.