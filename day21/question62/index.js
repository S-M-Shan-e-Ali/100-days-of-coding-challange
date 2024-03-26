/* Question : 62
        Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

        Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
*/
var student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};
console.log(student); // Showing the student's information
// we're using the blueprint to make sure our student has a name, age, and list of courses.
