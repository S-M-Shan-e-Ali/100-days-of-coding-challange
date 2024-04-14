/* Question : 103
        Write a function that returns a random boolean value, true or false.

        Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.
*/
// This function returns a random boolean value
function getRandomBoolean() {
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}
console.log(getRandomBoolean()); // Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
