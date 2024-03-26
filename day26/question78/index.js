/* Question : 78
        Function Expressions vs. Function Declaration: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

        Explain & TIP : JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
*/
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
;
// Function Expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
//Using both function to square the number 4
console.log(squareDeclaration(4)); // Output : 16
console.log(squareExpression(4)); // Output : 16
// Both method give us the same result, showing two different ways to create functions that do the same thing,
