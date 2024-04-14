
/*  Question : 112
        Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

        Explain & TIP : The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

*/

// Creates a new Map to store countries and their capitals
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);
// Logs the Map with the countries and their capitals.