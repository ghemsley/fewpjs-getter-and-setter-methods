// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(input) {
    this.radius = input / 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  set circumference(input) {
    this.diameter = input / Math.PI
  }

  get area() {
    return Math.PI * this.radius ** 2
  }

  set area(input) {
    this.radius = Math.sqrt(input) / Math.PI
  }
}
