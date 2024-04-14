/*  Question : 133
        Write a JavaScript object and convert it into a JSON string.

        Explain & TIP : JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to rad and write and for machines to pase and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
*/

// Defines a JavaScript object
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  // Converts the object into a JSON string
  const jsonString = JSON.stringify(person);
  
  console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
  // Demonstrates converting an object to a JSON string, making it easy to store or transmit.