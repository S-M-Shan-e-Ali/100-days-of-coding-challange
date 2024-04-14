
/* Question : 107
        Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

        Explain & TIP : Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.

*/

// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number: number): boolean {
    // Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
  }
  
  console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
  console.log(isDivisibleByTwoAndThree(14)); // Outputs: false
  // Logical operators help us verify the number's divisibility by both 2 and 3.