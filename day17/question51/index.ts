/* Question : 51
Refactoring to Arrow Functions: Take a simple function that calculates the area of a 
rectangle and refactor it into an arrow function.

Explain & TIP : Arrow functions provide a concise syntax for writing functions in
JavaScript and TypeScript, making your code cleaner and more readable
*/

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number{
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width:number, height:number): number => width * height;

// Example usage of the arrow function
console.log(calculateArea(5,7));         // Logs the area of the rectangle using Original function
console.log(calculateAreaArrow(5,7));    // Logs the area of the rectangle using Arrow function.