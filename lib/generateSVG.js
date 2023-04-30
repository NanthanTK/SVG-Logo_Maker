const { Circle, Square, Triangle } = require('./shape');
function createDocument({ text, textColor, fill, property }){

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${property} fill="#${fill}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#${textColor}">${text}</text>

    </svg>`;

}
module.exports = { createDocument };
