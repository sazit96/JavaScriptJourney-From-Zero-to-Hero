const _name = Symbol("name");
class Person {
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }

  get email() {
    return this[_email];
  }
  set email(value) {
    this[_email] = value;
  }
}
