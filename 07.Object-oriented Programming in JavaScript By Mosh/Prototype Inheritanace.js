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

// Overrriding Agin
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape() {}
Shape.prototype.dublicate = function () {
  console.log("Duplicate");
};
function Circle() {}
extend(Circle, Shape);
Circle.prototype.dublicate = function () {
  console.log("Duplicate Circle");
};
function Square() {}
extend(Square, Shape);
Square.prototype.dublicate = () => {
  console.log("Dublicate Square");
};
const shapes = [new Circle(), new Square()];
//Polymorphism
for (let shape of shapes) shape.dublicate();

// Mixins
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("Eating");
  },
};
const canWalk = {
  walk: function () {
    console.log("Walking");
  },
};
const canSwim = {
  swim: function () {
    console.log("Swiming");
  },
};
function Person() {}
mixin(Person.prototype, canWalk, canEat);
const person = new Person();
console.log(person);
function Fish() {}
mixin(Fish.prototype, canEat, canSwim);
const fish = new Fish();
console.log(fish);

// Exarcise
function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("Focused");
};
function HtmlSelectElement(items = []) {
  this.items = items;
  this.additem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}
HtmlSelectElement.prototype = new HtmlElement();
