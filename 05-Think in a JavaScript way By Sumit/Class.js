class Person {
  //parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}
class Cricketer extends Person {
  //sub class
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}
let sakib = new Cricketer("Sakib", 34, "All-Rounder", "Bangladesh");
console.log(sakib.play());

// Uses of Getter and setter
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${name} is eating`);
  }
  get setname() {
    // Getter
    return this.name + " islam";
  }
  set changeName(name) {
    // setter
    this.name = name;
  }
}
let sazit = new Person("Sazit", 23);
console.log(sazit.setname);
sazit.changeName = "Ehosanul";
console.log(sazit.name);

// Uses of Static
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${name} is eating`);
  }
  static yourFeeling() {
    console.log(`Alhamdulillah`);
  }
}
const sazit = new Person("Sazit", 23);
console.log(sazit.name);
Person.yourFeeling();
