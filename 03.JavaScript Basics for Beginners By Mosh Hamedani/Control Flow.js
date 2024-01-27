// if - else if - else 
let hour = 20;
if(hour >= 6 && hour < 12) 
  console.log("Good Morning!");
else if(hour >= 12 && hour < 18)
  console.log("Good Afternon");
else console.log("Good Evening");

// Switch and Case
let role = 'guest';
switch (role) {
  case 'guest':
    console.log('guest User');
    break;
  case 'moderator':
    console.log('moderator User');
    break;
  default:
    console.log('Unknown User');
}

                  // LOOPs
// FOR Loop
for(let i = 1; i <= 5; i++)
  console.log(i,"alhumdulillah");
 // (i = 0->initialExpression; i < 5->condition;->i++ incrementExpression)
for(let i = 0; i <= 10; i++) {
  if(i % 2 === 0) console.log(i);
}

for(let i = 10; i >= 0; i--) {
  if(i % 2 !== 0) console.log(i);
}
//While Loop
let i = 1;
while(i <= 10) {
    if(i % 2 === 0) console.log(i,"alhumdulillah");
    i++;
}
// Do-while loop
let x = 9;
do {
  if(x % 2 !== 0) console.log(x);
} while(x <= 5);
// for in loop - this loop mainly used in objects.
const person = {
  name: "Ehosanul Islam Sazit",
  age: 23
}
for(let key in person) console.log(person.name,person.age);
//For of loop this loop mainly used in finding arrays
const colors = ['red', 'green', 'blue'];
for(let index of colors) {
  console.log(index)
}
                      //Exarcises
// Finding max of two numbers
function maximum (a, b) {
  // if(a > b) return a; return b;
  return (a > b) ? a : b;
}
console.log(maximum(10,20))

// FizzBuzz Interview Question
function fizzBuzz (input) {
  if (typeof input != 'number') return "Not A Number";
  else if(input % 3 == 0 && input % 5 == 0) return "FizzBuzz";
  else if(input % 3 == 0) return "Fizz";
  else if(input % 5 == 0) return "Buzz";
  return input;
}
console.log(fizzBuzz(false))

// Demerit Points 
checkSpeed(70);
function checkSpeed (speed) {
  const speedLimit = 70;
  const kmPrPoint = 5;
  if(speed <= speedLimit + kmPrPoint - 1) return console.log("Ok");
  const points = Math.floor((speed - speedLimit) / kmPrPoint) ;
  if (points >= 12) console.log("Suspended");
  else console.log("points",points);
}

// Find Even and Odd Numbers
showNumbers(10);
function showNumbers(limit) {
  // for(let i = 0; i <= limit; i++) {
  //   if(i % 2 == 0) console.log(i, "EVEN");
  //   else console.log(i, "ODD");
  // }
  for(let i = 0; i <= limit; i++) {
    const ans = (i % 2 == 0) ? " EVEN" : " ODD";
    console.log(i, ans)
  }
}
// Count Truthy Value
const array = [0, 2, 3, null, undefined, '', 5];
console.log(isTruthy(array));
function isTruthy (array) {
  let count = 0;
  for(let value of array) {
    if (value) count++;
  }
  return count;
}
// Sum of Multiples of 3 and 5
function multipleSum (limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++)
    if(i % 3 == 0 || i % 5 == 0) sum += i;
  return sum;
}
console.log(multipleSum(10));

// Finding The Grade
const marks = [80, 80, 50];
console.log(calculateGrade(marks))
function calculateGrade (marks) { 
  let sum = 0, avarage = 0;
  for(let value of marks) {
    sum += value;
  }
  avarage = sum / marks.length;
  if(avarage < 60) return "F";
  else if (avarage < 70) return "D";
  else if (avarage < 80) return "C";
  else if (avarage < 90) return "B";
  return "A";
} 