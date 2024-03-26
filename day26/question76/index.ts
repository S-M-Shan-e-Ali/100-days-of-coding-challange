/* Question : 76
        Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

        Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task fo you and report back with the results.
*/

// This function adds two numbers and returns the result
function addNumber(num1:number, num2:number):number{
    return num1 + num2;  // Calculates the sum oof num1 and num2
}

// Calling the function with two numbers and logging the result 
console.log(addNumber(5,7));    // Shows output 12

//Here, we ask our function to add 5 and 7, and it tells us the answer is 12