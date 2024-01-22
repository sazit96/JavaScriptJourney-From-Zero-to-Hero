// document.getElementById("demo").innerHTML = 5 + 5;
// document.write(5+5);
// window.alert(5+5);
// console.log(5+5);

// JavaScript Syntax
// var a = 5;
// let b = 5;
// let ab = a+b;
// console.log(ab * 5 * a);
// console.log("Ehosanul-islam" + "-" + "Sazit");

    // JavaScript Variables
// var a = 15;
// var b = 5;
// console.log(a + b);

// let x = 105, y = 5;
// console.log(x - y);

// const c = 5, d = 5;
// console.log(c * d);

// JavaScript Function
// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(4, 4));

//JavaScript Objects
// const car = {
//   type:"flit",
//   model:"3974dx",
//   color:"black"
// };
// console.log(car.type, '\n', car.model, '\n', car.color);

//JavaScript Arrays
// let nam = ["sazit", "ehosanul", "islam"];
// nam[1] = ["bismillah"];
// nam.push("siam");
// console.log(nam, nam[1]);
// console.log(typeof(nam));
// console.log(nam.length);
// console.log(nam[nam.length-1]);
// console.log(Array.isArray(nam));
// console.log(nam.join("*"));

//Javascript date
// let a = new Date();
// console.log(a.toDateString());

// Javascript loops 
// for(let i=0; i<5; i++) {
//     console.log(i);
// }
// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   console.log(text+=person[x] + " ");
  
// }

//JavaScript Objects
// const person = {
//   fname: "Ehosanulislam",
//   lname:"Sazit",
//   age:23,
//   car: {
//     color:"blur",
//     wigth:"400kg"
//   }
// };
// person.county = " Bangladesh";
// delete person.county;
// for(let i in person) {
//   console.log(person[i]);
// }
// console.log(person.car.wigth)


//JavaScript Object Accessors
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language.toUpperCase();
//   }
// };
// console.log(person.lang);

//Javascript Constructor
// function Person (fast, last, age) {
//   this.fastName = fast,
//   this.lastName = last,
//   this.age = age,
//   this.fullName = function () {
//     return this.fastName + " " + this.lastName;
//   }
// }
// Person.prototype.country = "bangladesh";
// const sazit =new Person("Ehosanul islam ", "Sazit ", 23 ,"ban");
// const ehosanul =new Person("sazit islam ", "Ehosanul ", 23 ,"ban");
// console.log(sazit);
// console.log(ehosanul);

//JavaScript sets
// const letters = new Set (["a", "b", "c"]);
// const e = "e";
// letters.add(e);
// letters.add("d");
// console.log(letters);
// let txt = "";
// letters.forEach(value =>{
//   txt += value;
// });
// console.log(txt);
// let iterators = letters.values();
// for(let a of iterators) {
//   console.log(a);
// }

// Javascript maps
// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits,  fruits.get("bananas"), fruits.size);