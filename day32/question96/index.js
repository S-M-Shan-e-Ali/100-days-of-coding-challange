/* Question : 96
        Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

        Explain & TIP : The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
*/
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Calculating the sum of an array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs : 15
// It adds up all the numbers in the array, resulting in a single sum value.
