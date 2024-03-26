/* Question 64
        Combine Strings and Numbers: Write a function tha merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back " age: 30".
        
        Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
*/

// This function mixes a text and a number into one text function
function combineStringAndNumber(text:string, number:number): string{        
    return text + number;   // Joins the text and number into a single text
}

// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age :", 30)); // shows " Age: 30 "
// Here, we put together the text and number