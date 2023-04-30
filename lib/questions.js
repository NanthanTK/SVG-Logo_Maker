
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters to make your logo'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a hexadecimal color code (without#) for the color of the text.'
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'What shape do you want for your Logo ?',
      choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'fill',
        message: 'Enter a hexadecimal color code (without#) for the fill color of the shape.'
      }
  ];
  
  module.exports = questions;