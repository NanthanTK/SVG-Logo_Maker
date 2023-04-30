const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const questions = require('./lib/questions');
const { createDocument } = require('./lib/generateSVG');
const { Circle, Square, Triangle } = require('./lib/shape');

function isValidHexColor(color) {
    const regex = /^([0-9a-fA-F]{3}){1,2}$/;
    return regex.test(color);
  }
//to prompt user with questions to get data for the logo
inquirer.prompt(questions)
    .then((answers) => {
        let shapeToRender;
            if (answers.shapeType === 'Square') {
            shapeToRender = new Square(answers.text, answers.textColor, answers.fill);
            } 
            else if (answers.shapeType === 'Circle') {
            shapeToRender = new Circle(answers.text, answers.textColor, answers.fill);
            } 
            else{
            shapeToRender = new Triangle(answers.text, answers.textColor, answers.fill);
            }  
            return shapeToRender;
    })
    // Pass the shape information to a separate module to include in an SVG template
    .then ((shapeToRender)=>{
       
        if (!isValidHexColor(shapeToRender.fill) || !isValidHexColor(shapeToRender.textColor)) {
            console.error('Invalid color value(s) Try again.');
            process.exit(1);
          }
        const logoSVG = createDocument(shapeToRender);
        writeFile(
            join(__dirname, 'dist', 'logo.svg'),
            logoSVG
          );
          console.log('Generated logo.svg');
    })
 
    .catch((error) => {
    console.log('Error:', error);
    });

