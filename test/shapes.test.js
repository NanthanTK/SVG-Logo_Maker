const { Circle, Square, Triangle } = require('../lib/shape');

//properties similar to the userinputs to be used in the tests 
const testText="ABC";
const testTextColor = "0000FF";
const testFillColor= "FFD700";

//strings expected in the svg file to properly rended the text and shapes with required tex, text color and fill color
const expectedTriangleStr =`<polygon points="150, 18 244, 182 56, 182" fill="#${testFillColor}" />`
const expectedSquareStr =`<rect x="90" y="40" width="120" height="120" fill="#${testFillColor}" />`
const expectedCircleStr =`<circle cx="150" cy="100" r="80" fill="#${testFillColor}" />`

//new instances of the three shapes that are used by the app
const shapeTriangle = new Triangle(testText,testTextColor,testFillColor);
const shapeSquare = new Square(testText,testTextColor,testFillColor);
const shapeCircle = new Circle(testText,testTextColor,testFillColor);

//code used to generate the shape is `<${property} fill="#${fill}" />` 
//result strings from the shape classes
const resultTriangleStr = `<${shapeTriangle.property} fill="#${shapeTriangle.fill}" />`
const resultSquareStr = `<${shapeSquare.property} fill="#${shapeSquare.fill}" />`
const resultCircleStr = `<${shapeCircle.property} fill="#${shapeCircle.fill}" />`

describe('Shape', () => {
    test('creates a triangle with correct attributes', () => {
      
      expect(resultTriangleStr).toEqual(expectedTriangleStr);
    });
  
    test('creates a square with correct attributes', () => {
      
      expect(resultSquareStr).toEqual(expectedSquareStr);
    });
  
    test('creates a circle with correct attributes', () => {
      
      expect(resultCircleStr).toEqual(expectedCircleStr);
    });
  });


