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
const person = {
  fname: "Ehosanulislam",
  lname:"Sazit",
  age:23,
  car: {
    color:"blur",
    wigth:"400kg"
  }
};
person.county = " Bangladesh";
delete person.county;
for(let i in person) {
  console.log(person[i]);
}
console.log(person.car.wigth)