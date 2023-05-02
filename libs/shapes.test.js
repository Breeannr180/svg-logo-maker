const fs = require('fs');

describe('Logo generator', () => {
  it('generates a circle logo', () => {
    // Your code to generate a circle logo goes here
    // ...

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
    // ...

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
    // ...

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
