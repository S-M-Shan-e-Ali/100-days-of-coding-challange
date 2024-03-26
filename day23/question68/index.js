/* Question : 68
        Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

        Explain & TIP : When working with decimals in JavaScripts, results can be unexpectedly long. Rounding can help keep numbers manageable.
*/
function muliplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
; // Multiplies the numbers and rounds the result to two decimal places
// Trying it with 0.1 and 0.2
console.log(muliplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.
