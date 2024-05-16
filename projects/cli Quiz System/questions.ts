import chalk, { Chalk } from "chalk";
// Define a type for a Quiz Question.
type Question = {
    question: string;
    options: string[];
    correctAnswers: number[]; // indices of the correct options.
    isMultipleChoice?: boolean; // flag for multiple-choice questions.
}

// Define a type for the Quiz.
export type Quiz = {
    title: string;
    questions: Question[];
}

export const quiz: Quiz = {
    title: "Basic TypeScript Quiz",
//
    questions: [
        {
            question: 
            `Given the following TypeScript code:
            ${chalk.green`
            let a = "Pakistan";
            a = 9;
            console.log(a);
            `}
            Which of the following statement is correct?
            `,

            options: [
                "Compiler error on line 1",
                "Compiler error on line 2",
                "Compiler error on line 3",
                "No compiler errors"
            ],
            correctAnswers: [1]
        },
//-----------------------------------------------------------------------------------------
        {
            question: 
            `Given the following TypeScript code:
            ${chalk.green`
            if(true){
                let a=4;	//use a here
            }
            else{
                let a="string";	//use a here
            }
            console.log(a);
            `}
            which of the following statement is correct?`,

            options: [
                `Cannot use "a" in the if clause after declaration`,
                `Cannot use "a" in the else clause after declaration`,
                `Cannot use "a" in the log statement`,
                `Can use "a" in all the cases`
            ],
            correctAnswers: [2]
        },

//-----------------------------------------------------------------------------------------
        {
            question: 
            `Given the following TypeScript code:
            ${chalk.green`
            const a = 5;
            a++;
            console.log(a);
            `}
            which of the following statement is correct?
            `,
            
            options: [
                "Compiler error on line 1",
                "Compiler error on line 2",
                "Compiler error on line 3",
                "No compiler errors"
            ],
            correctAnswers: [1]
        },
//---------------------------------------------------------------------------------------------
        {
            question: 
            `Given the following TypeScript code:
            ${chalk.green`
            var a:number ="7";
            a = 9;
            console.log(a);
            `}
            Which of the following statement is correct?`,
            
            options: [
                "Compiler error on line 1",
                "Compiler error on line 2",
                "Compiler error on line 3",
                "No compiler errors"
            ],
            correctAnswers: [1]
        },
//------------------------------------------------------------------------------------------------
        {
            question: 
            `Given the following TypeScript code:
            ${chalk.green`
            let myType = {name: "Zia", id:1}; // Line A
            myType ={id:2; name:"Tome"}; 	  //Line B
            myType={id:3; name: "Mike", gender:false};  //Line C
            `}
            Which of the following statement is correct?`,
            
            options: [
                "Compiler error on line A",
                "Compiler error on line B",
                "Compiler error on line C",
                "No compiler errors"
            ],
            correctAnswers: [1]
        },

//-----------------------------------------------------------------------------------------------
        {
            question: "Which of the following is correct syntax in TypeScript to define an array?",
            options: [
                `let array1: number[]=[5,6,7];`,
                `let array2:Array<number>=[1,2,3];`,
                `let array3=new Array[number];`,
                `let array4:number[]=[];`,
                `let array5:number[]=new number[7];`
            ],
            correctAnswers: [0, 1, 3], // example of a multiple-choice question
            isMultipleChoice: true
        },

// add more Question here...............................
    ],
}

