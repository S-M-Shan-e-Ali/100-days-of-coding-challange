/*  Question : 84
        Replacing Text in a String : Write a function that takes a sentence and replaces all instance of the word "JavaScript" with "TypeScript".

        Explain & TIP: The  .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
*/
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript"); // Uses a regular expression with the 'g' flag for a global replacement
}
// Example : Changing a programming language name in a sentence 
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs : "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript"
