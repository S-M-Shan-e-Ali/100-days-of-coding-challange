/*  Question : 117
        Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

        Explain & TIP : The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
*/
// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
            break;
    }
}
evaluateGrade("G"); // Outputs: Good
// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
