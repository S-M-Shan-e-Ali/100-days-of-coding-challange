/*  Question : 120
        Use a for...of loop to iterate through an array of your favorite movies and log each one.

        Explain & TIP : The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
*/

// Defines an array of favorite movies
const favoriteMovies: string[] = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
  ];
  // Uses a for...of loop to iterate through favoriteMovies
  for (const movie of favoriteMovies) {
    console.log(movie); // Logs each movie name
  }
  // Each movie in the array is logged to the console, one at a time.