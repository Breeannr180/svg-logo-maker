const prompt = require('prompt-sync')();
const svg2img = require('svg2img');
const fs = require('fs');
const shapes = require('./libs/shapes')


//define shapes and colors
const validShapes = Object.keys(shapes);
const validColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let chosenShape;
//propmts user to choose a shape and color
const shape = prompt(`Select a shape (${validShapes.join(', ')}): `);
const color = prompt(`Select a color (${validColors.join(', ')}): `);
//propmts user to select text for logo
const text = prompt('Enter the text for the logo: ');
let svgMarkup
// prompt for text color
const textColor = prompt('Enter the text color (color keyword or hexadecimal number): ');

 if (shape==="circle") {
  svgMarkup = `<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle cx="50%" cy="50%" r="50" fill="${color}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill= "${textColor}" font-size="40">${text}</text>
  
  </svg>`;
 } else if (shape==='triangle') {
    svgMarkup = `<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="150,50 50,150 250,150" fill="${color}" stroke="%s" stroke-width="4" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill= "${textColor}" font-size="50">${text}</text>
    
    </svg>`;
  
 } else if (shape==='square') {
  svgMarkup = `<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <rect x="100" y="50" width="100" height="100" fill="${color}" stroke="%s" stroke-width="4" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill= "${textColor}" font-size="50">${text}</text>
  
  </svg>`;
 }
//create SVG markup for logo

// <${shape} cx="50%" cy="50%" r="50" fill="white"/>
// <${shape} width="100%" height="100%" fill="${color}"/>
//save svg markup to a file
fs.writeFile('logo.svg', svgMarkup, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//Convert the SVG file to PNG and save it to disk
svg2img(svgMarkup, function(error, buffer) {
  if (error) throw error;
  fs.writeFileSync('logo.png', buffer);
  console.log('The PNG file has been saved!');
});

