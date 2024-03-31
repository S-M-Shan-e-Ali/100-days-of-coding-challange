/* Question : 88
        Rounding to the Nearest Integer: Write a function tha takes a decimal number as input and returns the number rounded to the nearest integer.

        Explain & TIP : The Mat.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
*/

// This function rounds a decimal number to the nearest whole number
function roundToNearstInteger(num:number): number{
    return Math.round(num);    // Rounds the number
}

console.log(roundToNearstInteger(4.5)); // Outputs : 5    Rounding a decimal
console.log(roundToNearstInteger(4.4)); // Outputs : 4    Rounding a decimal

// This shows how the function rounds numbers either up or down