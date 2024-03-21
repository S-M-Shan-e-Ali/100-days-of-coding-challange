/* Question : 60
        Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

        Explain & TIP : This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
*/
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "John";
    var age = 30;
    //This part shares the user's details
    return { displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        } };
})();
//Asking he profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
