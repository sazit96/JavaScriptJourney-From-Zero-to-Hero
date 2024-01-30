//Higher Order Fuction
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) output.push(instructions(array[i]));
  return output;
}
//Callbacks Function
function multipleBy2(input) {
  return input * 2;
}
//Callback with arrow function
const multipleby2 = (input) => input * 2;
const result = copyArrayAndManipulate([5, 2, 3, 4], multipleBy2);
console.log(result);
