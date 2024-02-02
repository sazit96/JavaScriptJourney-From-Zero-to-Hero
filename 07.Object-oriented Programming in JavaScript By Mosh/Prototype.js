// Property Desciptros
let person = { name: `sazit` };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
});
person.name = "Ehosanul";
console.log(Object.keys(person)); // if enumerable is true than show all thing on the console otherwise not.
console.log(person); // if writable is true than name will be change.

// Constructor Prototypes
//Object Prototype
let obj = {}; // under the hood this will create a big Object like this new Object{};
obj.__proto__;
Object.prototype;
// Array Prototype
let array = [];
array.__proto__;
Array.prototype;

// Prototype Vs Instance Members
function Circle(radius) {
  this.radius = radius;
}
//Prototype Members
Circle.prototype.draw = function () {
  console.log("draw");
};
const c1 = new Circle(1);
const c2 = new Circle(2);
Circle.prototype.toString = function () {
  return `Circle with radius` + this.radius;
};
c1.toString();
