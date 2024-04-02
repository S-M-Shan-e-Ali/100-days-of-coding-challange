/*  Question : 95
        Write a function that uses the '.filter()' method to return an array of numbers greater than 10.

        Explain & TIP : The  .filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
//Filtering an array of numbers.
var numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Outputs : [5, 10, 15, 20, 25,]
//The new array contains only the numbers that are greater than 10.
