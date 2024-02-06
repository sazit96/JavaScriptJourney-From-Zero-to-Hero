class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getEmail() {
    return this._email;
  }
  setEmail(email) {
    this._email = email;
  }
}
const sazit = new Person(`Sazit`, `sazitislam96@gmail.com`);
sazit.setName(`Ehosanul`);
sazit.setEmail(`ehosanul96@gmail.com`);
console.log(sazit);
