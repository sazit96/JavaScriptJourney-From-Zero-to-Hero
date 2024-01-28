//Function

// Function Declaration
function walk() {
  console.log("walk");
}
walk();
// Function Expression
let run = function run() {
  console.log("Run");
};
run();
// if don't give any name on function than thous call anonymous function.

//Arguments
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 4, 5, 6, 6, 6, 7, 4, 11));

// The Rest Operator
function findDiscount(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(findDiscount(0.1, 20, 30));

// Getter and Setter
const person = {
  firstName: "Ehosanul",
  lastName: "Sazit",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "Ehosanul islam";
console.log(person);

// Try and catch
const person = {
  firstName: "Ehosanul",
  lastName: "Sazit",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("value is not a string");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  person.fullName = "John Doe";
} catch (e) {
  console.log(e.message);
}
console.log(person);

// Exercise
// Sum of Arguments
function sum(...items) {
  return items.reduce((a, b) => a + b);
}
console.log(sum(1, 3, 20, 20, 6));

// Area of circle
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area);
