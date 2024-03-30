/*  Question : 85
        Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" withing any given string and returns its position.

        Explain & TIP : Use  .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method return -1.
*/
// This function finds where "code" first shows up in a text 
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example : Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
