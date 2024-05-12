import inquirer from "inquirer";
import chalk from "chalk";
import { addTodo,remove,removeByName,display } from "./functions.js";

export let todos: string[]=[];

export async function start() {
    do{
        let ask = await inquirer.prompt({
                type : "list",
                name : "action",
                message : chalk.bgRed.whiteBright("\nWhat do you want?\n"),
                choices : ["Add Task","Remove Task with List Number","Remove Task with List Name","Todo List Check","Exit"]       
                });

         switch(ask.action){
                    case "Add Task":
                    let ask1= await inquirer.prompt({
                    type : "input",
                    name : "add",
                    message : chalk.bgGray.red.whiteBright("\nEnter Your Add Task Name : "),   
                    validate: (input: string) => {
                        // Check if the input is not empty and contains only letters
                        if (input.trim() === "") {
                            return "Cannot be Empty, Enter Your Add Task Name.";
                        }
                        return true; // Validation passed
                    }
                    })
                    addTodo(ask1.add)
                    
                    break;

                    case "Remove Task with List Number":
                            let ask2= await inquirer.prompt({
                            type : "input",
                            name : "removeNumber",
                            message : chalk.bgGray.red.whiteBright("\nEnter Remove Task List Number : ")   
                            })
                            remove(ask2.removeNumber)
                            
                    break;

                    case "Remove Task with List Name":
                        let ask3= await inquirer.prompt({
                            type : "input",
                            name : "removeName",
                            message : chalk.bgGray.red.whiteBright("\nEnter Remove Task List Name : ")   
                        })
                        removeByName(ask3.removeName)
                        
                    break;
                    
                    case "Todo List Check":
                        display();
                    break;
                    
                    case "Exit":
                        process.exit();
                    break;
                        }
            }while(true);
}

