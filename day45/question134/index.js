/* Question : 134
        Take a JSON string and parse it into a JavaScript object.

        Explain & TIP : JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web sever or API.
*/
// Defines a JSON string
var jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';
// Parses the JSON string back into a JavaScript object
var person = JSON.parse(jsonString);
console.log(person); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.
