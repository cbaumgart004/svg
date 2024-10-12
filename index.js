const fs = require('fs')
const inquirer = require('inquirer')
// Load SVG shapes
const { Triangle, Circle, Square } = require('./lib/shapes')

//inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters for the logo:',
      // Validate input length to be 3 or less
      validate: (input) =>
        input.length <= 3 || 'Please enter up to 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the logo (keyword or hex code):',
      // Validate color format with a RegEx
      validate: (input) =>
        /^#[0-9A-F]{6}$/i.test(input) ||
        'Please enter a valid color (keyword or hex code).',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (keyword or hex code):',
      // Validate color format with a RegEx
      validate: (input) =>
        /^#[0-9A-F]{6}$/i.test(input) ||
        'Please enter a valid color (keyword or hex code).',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers
    //switch cases for shape creation
    let selectedShape
    switch (shape) {
      case 'Circle':
        selectedShape = new Circle()
        break
      case 'Triangle':
        selectedShape = new Triangle()
        break
      case 'Square':
        selectedShape = new Square()
        break
    }
    selectedShape.setColor(shapeColor)

    // Create SVG element
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `

    // Save SVG to file
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err
      console.log('Logo created successfully!')
    })
  })
