/* Question : 55
        Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

        Explain & TIP : We can use a special tool to go through each number in our list and make a new list with each number doubled.
*/

let numbers = [1, 2, 3, 4, 5];  // Starts with a list of numbers

let doubledNumbers = numbers.map(number=>number*2);  // Doubles each number.
// Shows the new list of doubled numbers.
console.log(doubledNumbers);    // output: [2,4,5,8,10]
//This line takes each number, doubles it, and puts it in a new list.