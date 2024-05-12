import { todos } from "./todo.js";
import chalk from "chalk";
export function addTodo(value) {
    todos.push(value);
}
export function display() {
    if (todos.length >= 1) {
        console.log(chalk.green("\nTodo Task List : "));
        todos.forEach((todos, index) => {
            console.log(chalk.red(`${index + 1} : `) + chalk.blue(`${todos}`));
        });
    }
    else {
        console.log(chalk.red("Todo List is Empty"));
    }
}
export function remove(listNumber) {
    if (listNumber >= 1 && listNumber <= todos.length) {
        todos.splice(listNumber - 1, 1);
        console.log(chalk.red("Number ") + chalk.green(`${listNumber}`) + chalk.red(" Task Remove in Todo List"));
    }
    else {
        console.log(chalk.bold.red("Invalid index, Todo not found"));
    }
}
export function removeByName(name) {
    const index = todos.findIndex(todo => todo === name);
    if (index !== -1) {
        todos.splice(index, 1);
        console.log(chalk.green(`${name}`) + chalk.red(" Task Remove in Todo List"));
    }
    else {
        console.log(chalk.bold.red("Todo not found"));
    }
}
