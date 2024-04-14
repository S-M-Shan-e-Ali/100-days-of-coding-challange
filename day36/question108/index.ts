
/* Question 108: 
        Compare two strings to check if they are identical, ignoring case sensitivity.  

        Explain & TIP : To compare strings without considering their case (uppercase/lowercase), you convert both strings to the same case before comparing.
*/

// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
        // Converts both strings to lowercase before comparison
        return str1.toLowerCase() === str2.toLowerCase();
      }
      
      console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
      console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
      // We make both strings lowercase to ensure the comparison ignores case differences.