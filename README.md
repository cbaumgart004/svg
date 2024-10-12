# svg

SVG Generator
Dependencies: Inquirer and Jest. Installation: Run npm install inquirer 8.2.4 and npm install --save-dev jest

# SVG Logo Generator

## Description

This application allows users to enter in the following fields to generate a custom logo:

- Users choose text for their logo (3 character limit)
- Users choose the text color
- Users choose 1 of the following shapes: Triangle, Circle, or Square
- Users choose the color of the shape.
  All of the above are generated through inquirer prompts in the console.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [svg](#svg)
- [SVG Logo Generator](#svg-logo-generator)
  - [Description](#description)
  - [Table of Contents (Optional)](#table-of-contents-optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

There are 2 key dependencies this application relies on:

- Jest for testing
- Inquirer version 8.2.4. Please note: Inquirer version 9 does not run correctly.
- npm install inquirer@8.2.4
- npm install --save-dev jest

## Usage

Once you've installed your dependencies, at the root of the folder, run node index.js. You will see a selection of prompts. Answer the prompts in the order they are given. Note: There is a 3 character limit to the logo text. Colors accepted can either be keywords or hex values. No numerical input not associated with a hex value will be accepted. Once you've followed all the prompts, you will see a new logo.svg file generated in the root of your directory, looking something like this:
![logo](/assets/SVG%20Logo.jpg)
Note: you can also run npm test to use Jest to test the shape creation to ensure it is working properly.

## Credits

This application was created by [Chris Baumgart](https://github.com/cbaumgart004)

## License

[MIT License](https://github.com/cbaumgart004/svg/blob/main/LICENSE)
