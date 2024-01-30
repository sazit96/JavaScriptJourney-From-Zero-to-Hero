// Fuction return other function
function createFunction() {
  function multipleBy2(num) {
    return num * 2;
  }
  return multipleBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3);
console.log(result);

// calling a function in the same function call as it was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
  console.log(counter);
}
outer();

// Calling a function outside of the fuction call in which it  was defined
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}
const myNewFunc = outer();
console.log(myNewFunc());
