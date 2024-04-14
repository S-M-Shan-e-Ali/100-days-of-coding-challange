/*  Question : 119
        Create a while loop that logs "Hello, World!" 5 times.

        Explain & TIP : A while loop continues to run as long as its condition remains true. It's ideal for when you want to repeat something until a certain condition changes.
*/

// Initializes a counter
let count: number = 0;
// This while loop runs until count is 5
while (count < 5) {
  console.log("Hello, World!"); // Logs "Hello, World!"
  count++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.