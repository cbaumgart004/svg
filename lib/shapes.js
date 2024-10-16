class Shape {
  constructor() {
    this.color = '' // Initialize with an empty string or default color
  }

  setColor(color) {
    this.color = color // Set color from the argument passed
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />`
  }
}

module.exports = { Triangle, Circle, Square }
