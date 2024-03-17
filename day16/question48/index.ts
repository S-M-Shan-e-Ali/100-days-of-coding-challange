/*  Question :  48
Combining Arrays with Spread Operator; Suppose you're comparing prices of two different
sets of laptops. Use the spread operator to combine these arrays into a single array
sorted in ascending order, then log the result.

Explain & TIP : The spread operator can be used in conjunction with array methods like 
sort() to combine and manipulate arrays efficiently.
*/


let pricesSet1  = [1200, 1500, 1100];
let pricesSet2  = [1000, 1300, 1600];

let combinedPrices  = [...pricesSet1, ...pricesSet2].sort((a,b)=> a-b);

console.log(combinedPrices);