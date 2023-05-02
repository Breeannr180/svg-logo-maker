const fs = require('fs');
const { square } = require('./shapes');

describe('Logo generator', () => {
  it('generates a circle logo', () => {
    // Your code to generate a circle logo goes here
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');

    // Check if the logo file exists
    expect(fs.existsSync('logo.svg')).toBeTruthy();

    // Check if the logo is a valid SVG file
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toMatch(/^<svg/);
    expect(svgData).toMatch(/<\/svg>$/);

    // Check if the logo contains a circle element
    expect(svgData).toMatch(/<circle\s.*?\bclass="circle"\b.*?>/);
  });

  it('generates a square logo', () => {
    // Your code to generate a square logo goes here
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');

    // Check if the logo file exists
    expect(fs.existsSync('logo.svg')).toBeTruthy();

    // Check if the logo is a valid SVG file
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toMatch(/^<svg/);
    expect(svgData).toMatch(/<\/svg>$/);

    // Check if the logo contains a rect element
    expect(svgData).toMatch(/<rect\s.*?\bclass="square"\b.*?>/);
  });

  it('generates a triangle logo', () => {
    // Your code to generate a triangle logo goes here
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="1150,50 50,150 250,150" fill="blue" />');

    // Check if the logo file exists
    expect(fs.existsSync('logo.svg')).toBeTruthy();

    // Check if the logo is a valid SVG file
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toMatch(/^<svg/);
    expect(svgData).toMatch(/<\/svg>$/);

    // Check if the logo contains a polygon element
    expect(svgData).toMatch(/<polygon\s.*?\bclass="triangle"\b.*?>/);
  });
});
