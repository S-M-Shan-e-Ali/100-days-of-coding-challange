/* Question 53:
        Pulling Apart a Nested Object: Imagine you have a list inside another list hat shows what a computer programmer knows, like coding language, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

        Explain & TIP : Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
*/
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", " Docker"]
};
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools; // Getting specific skills from the list
// Showing a skill from each category
console.log("Language : ".concat(languages[0], ", Framework : ").concat(frameworks[0], ", Tool : ").concat(tools[0]));
