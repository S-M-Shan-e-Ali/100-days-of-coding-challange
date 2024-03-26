/* Question : 77
        Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

        Explain & TIP : Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making function more flexible.
*/

// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name:string = "anonymous"){
    console.log(`Hello, ${name}!`);  // Says hello to the given name or to an anonymous user
}

// Trying the function with a name and without 
greetUser ("Shan"); // Outputs : Hello Shan!
greetUser();    // Outputs : Hello anonymous!

// We see how our function can say hello to someone by name, or just say hello if we don't know the name.