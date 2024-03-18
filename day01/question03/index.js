/* Question 03:
        Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.

        Explain & TIP : Save a name in variable. Show it in all small letters, ALL BIG LETTERS, and First letter Big for each word. This helps learn how to change text style.
*/
var Personalmsg = "Syed Muhammad Shan-e-Ali"; // This save the name.
var LowerCaseName = Personalmsg.toLowerCase(); // This save the small letters.
var UpperCaseName = Personalmsg.toUpperCase(); // This save the ALL BIG LETTERS.
var TitleCaseName = []; // This save the First letters Big for each word
var word = LowerCaseName.split(' ');
for (var i = 0; i < word.length; i++) {
    TitleCaseName[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log("Personal Name in LowerCase is '" + LowerCaseName + "'"); // show Lower Case
console.log("Personal Name in UpperCase is '" + UpperCaseName + "'"); // show Upper Case.
console.log("Personal Name in TitleCase is '" + TitleCaseName.join(' ') + "'"); // show Title Case.
