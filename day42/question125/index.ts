/*  Question : 125
        Modify a method in an object to use the this keyword to access another property in the same object.

        Explain & TIP : You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data. 
*/


// An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
      return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
  };
  
  console.log(rectangle.calculateArea()); // Outputs: 20
  // The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.