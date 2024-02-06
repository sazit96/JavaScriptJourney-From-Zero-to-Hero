const _name = Symbol("name");
const _email = Symbol("email");
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

const _subjects = Symbol("subjects");
const _tuitionFee = Symbol("tuitionFee");
class Student extends Person {
  constructor(subjects, tuitionFee, name, email) {
    super(name, email);
    this[_subjects] = subjects;
    this[_tuitionFee] = tuitionFee;
  }
  get subjects() {
    return this[_subjects];
  }
  get tuitionFee() {
    return this[_tuitionFee];
  }
}

const _subject = Symbol("subject");
const _salary = Symbol("salary");
class Teacher extends Person {
  constructor(subject, salary, name, email) {
    super(name, email);
    this[_subject] = subject;
    this[_salary] = salary;
  }
  get subject() {
    return this[_subject];
  }
  get salary() {
    return this[_salary];
  }
}

const p_Sazit = new Person(`Sazit`, `sazitislam96@gmail.com`);
const s_Ehosanul = new Student(
  [`Computer`, `Physics`, `Math`],
  50000,
  `Ehosanul`,
  `ehosanul96@gmail.com`
);
const t_Islam = new Teacher(`Islamic`, 200000, `Islam`, `islam313@gmail.com`);
console.log(p_Sazit);
console.log(s_Ehosanul);
console.log(t_Islam);
