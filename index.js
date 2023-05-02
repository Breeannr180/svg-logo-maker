const prompt = require('prompt-sync')();
const svg2img = require('svg2img');
const fs = require('fs');
// const logo = require('./libs/shapes')
//define shapes and colors

const shapes = ['circle', 'square', 'triangle'];
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];


//propmts user to choose a shape and color
const shape = prompt(`Select a shape (${shapes.join(', ')}): `);
const color = prompt(`Select a color (${colors.join(', ')}): `);
//propmts user to select text for logo
const text = prompt('Enter the text for the logo: ');
// prompt for text color
const textColor = prompt('Enter the text color (color keyword or hexadecimal number): ');

//create SVG markup for logo
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
               <rect width="100%" height="100%" fill="${color}"/>
               <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50">${text}</text>
               <${shape} cx="50%" cy="50%" r="50" fill="white"/>
            </svg>`;
//save svg markup to a file
fs.writeFile('logo.svg', svg, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
//Convert the SVG file to PNG and save it to disk
svg2img(svg, function(error, buffer) {
  if (error) throw error;
  fs.writeFileSync('logo.png', buffer);
  console.log('The PNG file has been saved!');
});

