/* Question : 56
        Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

        Explain & TIP : We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
*/

let mixedArray = [1, "apple", 2, "banana", true, "carrot"]; // A mixed bag of items.

let stringsArray = mixedArray.filter(item=> typeof item === "string"); // Picks out only the words.

// Shows the list of just words.
console.log(stringsArray); // output : [ "apple", "banana", "carrot"]
// This line checks each item : if it's a word, it goes into the new list.