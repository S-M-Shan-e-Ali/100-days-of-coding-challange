/*  Question : 92
        Write a function to remove the last element from an array and return the removed element.

        Explain & TIP : The '.pop()' method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
*/

// This function removes the last element from an array and returns it.
function removeLastElement<T>(arr:T[]): T | undefined{
    return arr.pop();  // Removes and returns the last element of the array.
}

// Removing the last fruit from the array.
const fruits : string[] = ["Apple","Banana","Cherry"];
console.log(removeLastElement(fruits)); // Outputs : Cherry
console.log(fruits); // Outputs : ['Apple','Banana']
// Here, we take out the last fruit and show the updated list.
