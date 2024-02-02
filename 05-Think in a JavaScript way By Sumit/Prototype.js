const personDetails = {
  eat: () => console.log(` person is eating`),
  sleep: () => console.log(` person is sleeping`),
};
function personData(name, age) {
  let person = Object.create(personDetails);
  person.name = name;
  person.age = age;
  return person;
}
const ehosanul = personData(`Ehosanul `, 30);
ehosanul.eat();
console.log(ehosanul);

// create new object
const captain = {
  name: `Sazit`,
  age: 23,
  country: `Bangladesh`,
};
const player = Object.create(captain);
console.log(player.country);

//Prototypes
function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
Person.prototype = {
  eat: () => console.log(`person is eating`),
  sleep: () => console.log(`person is sleeping`),
  play: () => console.log(`person is playing`),
};
const ehosanul = Person(`Ehosanul `, 30);
ehosanul.eat();
ehosanul.play();

// write prototype with (new and this )
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  eat: () => console.log(`person is eating`),
  sleep: () => console.log(`person is sleeping`),
  play: () => console.log(`person is playing`),
};
const ehosanul = new Person(`Ehosanul `, 30);
ehosanul.eat();
ehosanul.play();

// write prototype with  class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}
const ehosanul = new Person(`Ehosanul `, 30);
ehosanul.eat();
ehosanul.play();
