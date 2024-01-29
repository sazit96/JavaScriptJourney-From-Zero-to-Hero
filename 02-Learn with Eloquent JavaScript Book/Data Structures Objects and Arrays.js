// declaring an array
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2 + 3]);

//toUpperCase and toLowerCase
let name = "Ehosanul Islam Sazit";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// uses of push and pop methods
let sequence = [1, 2, 3, 4, 5];
sequence.push(6); // push in last
console.log(sequence);
sequence.pop(); // remove from last
console.log(sequence);

// Objects
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
console.log(day1.events);
console.log(day1.events[3]);
delete day1.events;
console.log(day1.events);
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 5, c: 6 });
console.log(objectA);
// here we see that this == is checks the object not value also obj3 has differant value that's why give false;
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
console.log(obj1 == obj2);
console.log(obj1 == obj3);
obj1.value = 15;
console.log(obj2.value);
console.log(obj3.value);
