/*  Question 52:
        Make a Smartphone Object: Create a simple way to keep track of a Smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

        Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
*/
// Sets up details about a smart phone
var Smartphone = {
    make: "Samsung",
    model: "Galaxy s21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: " 18 hours"
    }
};
// Shows what we've set up about the smartphone
console.log(Smartphone);
