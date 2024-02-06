class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
}
const sazit = new Person(`Sazit`, `sazitislam96@gmail.com`);
console.log(sazit.name);
console.log(sazit.email);
sazit.name = "Ehosanul";
console.log(sazit.name);
