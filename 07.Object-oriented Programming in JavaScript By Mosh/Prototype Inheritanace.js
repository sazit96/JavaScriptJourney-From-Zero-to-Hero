// Creating Own prototype Inheritance
function extand(Child, Parent) {
  // intermidated inheratance function
  Child.prototype = Object.create(Parent.prototype);
  //resetting the constructor
  Child.prototype.constructor = Child;
}
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log(`Duplicate`);
};
function Circle(radius, color) {
  //call super constructor
  Shape.call(this, color);
  this.radius = radius;
}
extand(Circle, Shape);
Circle.prototype.draw = function () {
  console.log(`Draw`);
};
function Square(size) {
  this.size = size;
}
extand(Square, Shape);
const s = new Shape();
const c = new Circle(1, "red");
