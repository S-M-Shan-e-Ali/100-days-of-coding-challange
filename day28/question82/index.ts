/* Question : 82
        Find the Length of String: Write a function that takes a string as an argument and returns the number of characters in the string.

        Explain & TIP: The  .length property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with.
*/

// This function counts how many characters are in string
function stringLenth(str : string) : number{  
    return str.length;      // Returns the number of characters in the string
}

// Example : Measuring the length of aname
console.log(stringLenth("Shan e Ali")); // Outputs : 10
// We're simply asking how long the string "Shan e Ali" is, and it tells us there are 10 characters.