import inquirer from "inquirer";
import chalk from "chalk";
async function displayQuiz(quiz) {
    console.log(`Quiz: ${quiz.title}`);
    const answers = [];
    for (const [index, question] of quiz.questions.entries()) {
        console.clear();
        const answer = await inquirer.prompt([{
                type: question.isMultipleChoice ? "checkbox" : "list",
                name: "response",
                message: `${index + 1}. ${question.question}\n`,
                choices: question.options
            }]);
        if (question.isMultipleChoice) {
            answers.push(answer.response.map((selectedOption) => question.options.indexOf(selectedOption)));
        }
        else {
            answers.push([question.options.indexOf(answer.response)]);
        }
    }
    return answers;
}
function checkAnswers(quiz, answers) {
    let score = 0;
    quiz.questions.forEach((question, index) => {
        const correctAnswers = question.correctAnswers.sort().toString();
        const userAnswers = answers[index].sort().toString();
        if (correctAnswers === userAnswers) {
            score++;
        }
    });
    return score;
}
// Sample function to simulate user taking the quiz
export async function takeQuiz(quiz) {
    const userAnswers = await displayQuiz(quiz);
    const score = checkAnswers(quiz, userAnswers);
    console.clear();
    console.log(`\n\n\t\t ${chalk.red("Basic TypeScript Quiz score is :")} ${chalk.blue(score)} / ${chalk.green(quiz.questions.length)}\n\n`);
}
