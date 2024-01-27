                                                               // Objects

  const circle = {
    redius: 1,
    location: {
      x:1, 
      y:1
    },
    isVisible: true,
    drow: function() {
      console.log("Drow");
    }
  };
  circle.drow();

  //Factory Fuction
  function createCircle (radius) {
    return {
      radius,
      drow() {
        console.log("drow");
      }
    };
  }
  const circle1 = createCircle(1);
  console.log(circle1);
  const circle2 = createCircle(2);
  console.log(circle2);

  // Constructor Function
  function Circle(radius) {
    this.radius = radius;
    this.drow = function() {
      console.log("drow");
    }
  }
  const circle = new Circle(1);
  console.log(circle);

  //Dynamic Nature of Object
  const circle = {
    radius:1
  }
  circle.color = 'yellow';
  circle.drow = function(){};
  console.log(circle);
  delete circle.color;
  console.log(circle);

  //Enumerating Properties of an Object
  const circle = {
    radius: 1,
    drow: function() {
      console.log('drow');
    }
  };
  for(let key in circle)
    console.log(key,circle[key]);

  //Cloning an Object
  const circle = {
    radius: 1,
    drow() {
      console.log('drow');
    }
  };
  const another = {};
  for(let key in circle) another[key] = circle[key];
  console.log(another);
  const another2 = Object.assign({}, circle);
  console.log(another2);
  const another3 = {...circle};
  console.log(another3);
  
                    //Exercises

  //Find the adderess an object
  const address = {
    country: 'Bangladesh',
    city: 'Gazipur',
    word: 23
  };
  
  function showAddress(address){
    for(let key in address) 
      console.log(key,address[key]);
  }
  showAddress(address);

// Do this in Factory and Constructor way
//Factory Function
let address = createAddress ("bangladesh", 'Gazipur', 23);
console.log(address)
function createAddress(country, city, word) {
  return {
    country,
    city,
    word
  };
}
//Constructor Function
function CreateAddress (country, city, word) {
  this.country = country;
  this.city = city;
  this.word = word;
}
console.log(new CreateAddress("bangladesh", 'Gazipur', 23))