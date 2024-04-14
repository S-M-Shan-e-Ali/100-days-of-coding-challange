/* Question 126
        Explain how the this keyword changes its value when used inside a nested function within a method.

        Explain & TIP : When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.
*/

const myObject = {       // Demonstrates 'this' behavior change in a nested function
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
      };
  
      innerMethod();
    },
  };
  
  myObject.outerMethod();
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.