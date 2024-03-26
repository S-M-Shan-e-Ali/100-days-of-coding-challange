/* Question : 63
        Shape Shifter : Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

        Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.
*/
type Shape = {  // Creating a custom type (type alias) for shapes that could be circles or rectangles
    kind: "circle" | "rectangle" ;
    radius?: number ;   // Only for circles
    width?: number;     // Only for rectangles
    height?: number };    // Only for rectangles

let circle : Shape ={       // Describing a circle using our Shape type
    kind: "circle",
    radius: 5  };

let rectangle : Shape = {   // Describing a rectangle using our Shape type
    kind: "rectangle",
    width: 10,
    height: 20  };

console.log(circle);        // Showing we described here's the circle
console.log(rectangle);     // Showing we described here's the rectangle.
// We made a flexible program that can describe different shapes in details