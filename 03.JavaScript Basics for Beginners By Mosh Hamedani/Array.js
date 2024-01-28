//Arrays
//Adding Elements
const array = [1, 2];
//add end
array.push(5, 6);
console.log(array);
//add beginning
array.unshift(3, 4);
console.log(array);
//add middle
array.splice(1, 0, "a", "b");
console.log(array);

// Finding Element Primitives values
const arr = [1, 2, 3, 1];
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(1));
console.log(arr.includes(1));

//Finding Element By Reference
const names = [
  { id: 1, name: "Ehosanul" },
  { id: 2, name: "Sazit" },
];
const name = names.find(function (name) {
  return name.name === "Ehosanul";
});
console.log(name);
const namess = names.findIndex(function (namess) {
  return namess.name === "Sazit";
});
console.log(namess);

//Removing Element
const numbers = [1, 2, 3, 4, 5];
//END
numbers.pop();
console.log(numbers);
//Beginning
numbers.shift();
console.log(numbers);
//middle
numbers.splice(2, 1);
console.log(numbers);

//Emptying an Array
let num = [1, 3, 4, 5, 5, 6];
// 1st way
num = [];
// 2nd way
num.length = 0;
// 3rd way
num.splice(0, num.length);
console.log(num);

//Combining and Slicing an Array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
const slice = combined.slice(2, 4);
console.log(slice);

//Combining an Array with Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, "a", "b", ...second];
console.log(combined);
const copy = combined;
console.log(copy);

//Iteraing an Array
const array = [1, 2, 3, 4, 5, 6];
//1st way
for (let key of array) console.log(key);
//2nd way
array.forEach((index, number) => console.log(index, number));

// joing an array
const array = [1, 2, 3];
const joined = array.join(" => ");
console.log(joined);

// Sorting Arrays
const array = [2, 4, 5, 1];
array.sort();
console.log(array);
array.reverse();
console.log(array);
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];
courses.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);

//Testing the Elements of and array
const numbers = [2, -5, 2, 4, 5, 6];
//every used to find only positive value is give true other wise give false;
const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);
//some used to find if one positive it will give true else give false;
const onePositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(onePositive);

//Filtering Array
const array = [1, 4, 2, -1, 5, -6, 6, 7];
const filteringArray = array.filter(function (value) {
  return value >= 0;
});
// const filteringArray = array.filter(value => value >= 0);
console.log(filteringArray);

//Exercise

//Array from Range
function arrayFromRange(min, max) {
  const ans = [];
  for (let i = min; i <= max; i++) {
    ans.push(i);
  }
  return ans;
}
const numbers = arrayFromRange(4, 10);
console.log(numbers);

//Find  if element Include in Array
function includes(array, searchElement) {
  for (let key of array) if (key === searchElement) return true;
  return false;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(includes(numbers, 2));

// Except new Array
function except(array, excluded) {
  const output = [];
  for (let key of array) if (!excluded.includes(key)) output.push(key);
  return output;
}
const array = [1, 3, 5, 5, 6, 5, 6, 2];
console.log(except(array, [1, 3]));
