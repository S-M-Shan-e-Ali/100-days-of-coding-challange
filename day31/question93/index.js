/* Question : 93
        Find the index of "Banana" in an array of fruits and replace it with "Mango".

        Explain & TIP : To replace an item in an array, find its index using '.indexOf()', then use that index to set a new value with array bracket notation.
*/
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana"); // Finds thee index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Replacing "Banana" in the array.
var fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs :  ['Apple','Mango','Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
