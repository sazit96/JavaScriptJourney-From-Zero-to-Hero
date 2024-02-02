const circle = {
  radius: 1,
  location: {
    country: "bangladesh",
    city: "Gazipur",
  },
  name: () => console.log("Ehosanul Islam Sazit"),
};
circle.name();

//Factoris function
function createCircle(radius) {
  return {
    radius,
    name: () => console.log(`Ehosanul Islam Sazit`),
  };
}
const circle = createCircle(1);
circle.name();

//constructors function
function Circle(radius) {
  this.radius = radius;
  this.name = () => console.log(`Ehosanul Islam Sazit`);
}
const circle = new Circle(1);
circle.radius;
circle.name();
