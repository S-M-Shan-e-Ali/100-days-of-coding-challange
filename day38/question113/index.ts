
/* Question : 113
        Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

        Explain & TIP : You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
*/
const countries = new Map<string, string>();    // Creates a new Map to store countries and their capitals
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);  // Logs the Map with the countries and their capitals.

// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) { console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else { console.log("Canada is not in the Map."); }
}

logCapitalOfCanada(countries); // Checks if Canada is in our Map and logs the capital if it exists.
