/*  Question : 89
        Converting Strings to numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

        Explain & TIP :  parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.
*/
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); //Outputs : 123.45
console.log(convertStringToNumber("98")); //Outputs : 98
// We're taking strings that look like numbers and turning them into actual numbers.
