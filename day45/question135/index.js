/*  Question : 135
        Explain how you can format a JSON string with proper indentation for readability.

        Explain & TIP : JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
*/
// Reusing the person object from Question 133
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// Converts the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
/* Outputs:
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
