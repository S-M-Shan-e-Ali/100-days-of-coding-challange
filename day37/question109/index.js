/*  Question 109:
        Write an if statement that logs "Good Morning" if the current time is before 12 PM.

        Explain & TIP : You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
*/
// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
else
    console.log("Good After Noon"); // It's After Noon if after 12 PM}
// This simple check helps us greet users appropriately based on the time of day.
