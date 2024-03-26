/* Question : 63
        Shape Shifter : Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

        Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.
*/
var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle); // Showing we described here's the circle
console.log(rectangle); // Showing we described here's the rectangle.
// We made a flexible program that can describe different shapes in details
