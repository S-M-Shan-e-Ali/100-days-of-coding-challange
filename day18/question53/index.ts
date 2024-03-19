/* Question 53:
        Pulling Apart a Nested Object: Imagine you have a list inside another list hat shows what a computer programmer knows, like coding language, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

        Explain & TIP : Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
*/

let developerSkills ={           // A list showing a programmer's skills in detail
        languages : ["JavaScript","TypeScript","Python"],
        frameworks : ["React", "Angular", "Vue"],
        tools : ["Git", "Webpack", " Docker"]
};
let {languages, frameworks, tools} = developerSkills;  // Getting specific skills from the list
// Showing a skill from each category
console.log(`Language : ${languages[0]}, Framework : ${frameworks[0]}, Tool : ${tools[0]}`);