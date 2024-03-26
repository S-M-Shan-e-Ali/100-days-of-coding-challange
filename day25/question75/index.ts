/* Question : 75
        Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with `x=4` and perform a series of operations(addition, subtraction, multiplication, division) on `x` using compound operators.

        Explain & TIP: Compound assignment operators combine an arithmetic operators combine and arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing `x=x+2`, you can simply write `x +=2`
*/

function useCompoundOperator(){     // This function uses compound assignment operators for different operations
    let x = 4;  // Starts with x equal to 4
    console.log(`Initial x : ${x}`);
    x +=2;  // Adds 2 to x 
    console.log(`After addition : ${x}`)
    x -=1;  // Subtracts 1 from x
    console.log(`After subtraction : ${x}`);  
    x *=3;  // Multiplies x by 3
    console.log(`After multiplication : ${x}`);
    x /=2;  // division x by 2
    console.log(`After division : ${x}`);  }

    useCompoundOperator();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
