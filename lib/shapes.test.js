// lib/shapes.test.js

const { Triangle, Circle, Square } = require('./shapes')
//test Triangle class
test('Triangle renders correctly', () => {
  const shape = new Triangle()
  shape.setColor('blue')
  expect(shape.render()).toBe(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  )
})
//Test Circle class
test('Circle renders correctly', () => {
  const shape = new Circle()
  shape.setColor('red')
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />')
})
//test Square class
test('Square renders correctly', () => {
  const shape = new Square()
  shape.setColor('green')
  expect(shape.render()).toBe(
    '<rect x="100" y="100" width="100" height="100" fill="green" />'
  )
})
