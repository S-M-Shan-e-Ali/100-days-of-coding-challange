
/* Question : 114
        Iterate over a Map of student IDs and names, and log each pair to the console.

        Explain & TIP : Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
*/

// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.