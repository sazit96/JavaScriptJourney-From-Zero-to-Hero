class Circle {
  constructor(radius) {
    this.radius = radius;
    this.drow = () => console.log("draw");
  }
}

const circle = new Circle(30);
console.log(circle);

//Static
class Circle1 {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("Draw");
  }
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle1(radius);
  }
}
const circle1 = Circle1.parse('{"radius": 1}');
console.log(circle1);

// Symbols
const _radius = Symbol();
const _darw = Symbol();
class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_darw]() {}
}
const c = new Circle(1);
console.log(Object.getOwnPropertySymbols(c));

//Getter and Setter
const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}
const cc = new Circle(1);

// Inheritance  with Class
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("Move");
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  drow() {
    console.log("Drow");
  }
}
const ccc = new Circle(`Blue`, 1);

// Method over riding
class Shape {
  move() {
    console.log("move");
  }
}
class Circle extends Shape {
  move() {
    super.move();
    console.log(`Circle move`);
  }
}
const circle = new Circle();
console.log(circle.move());
