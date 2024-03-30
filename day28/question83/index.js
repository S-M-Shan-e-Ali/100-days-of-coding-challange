/* Question : 83
        Converting to Upper and LowerCase: Create a function that takes a string, converts it to uppercase. and logs both.

        Explain & TIP: The  .toUpperCase() and  >toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
*/
// This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    var upperStr = str.toUpperCase(); // Converts to uppercase
    var lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("UpperCase : ", upperStr, " LowerCase : ", lowerStr);
}
// Example : Changing the case of "Hello world"
convertCase("Hello World"); // Output: "Uppercase : "HELLO WORLD", Lowercase : "hello world"
// We're showing the same text in all uppercase and then all lowercase.
