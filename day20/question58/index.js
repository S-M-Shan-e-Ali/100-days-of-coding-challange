/* Question : 58
        Average Score Calculator: Write a simple program that can take lots of scores and find their average.

        Explain & TIP : This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
*/
// This program calculates the average of all scores given
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0); // Adds all scores together and divides by the number of score
    return total / scores.length;
}
// Example : finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
