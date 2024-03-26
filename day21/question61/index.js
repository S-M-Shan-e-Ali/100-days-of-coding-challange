/* Question : 61
        Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
        
        Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
*/
// Making a list (enum) for different types of vehicles 
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycles"] = 2] = "Motorcycles";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list 
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
