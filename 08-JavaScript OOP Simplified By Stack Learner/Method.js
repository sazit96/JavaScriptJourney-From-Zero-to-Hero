class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method
  changeName(name) {
    this.name = name;
  }
  location() {
    console.log("Dhaka, Bangladesh");
  }
}
const sazit = new Person(`Sazit`, 23);
sazit.changeName(`Ehosanul`);
console.log(sazit);
console.log(sazit.location());
