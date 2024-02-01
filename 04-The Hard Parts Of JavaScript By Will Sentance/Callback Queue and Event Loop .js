function printHello() {
  console.log(`Hello`);
}
setTimeout(printHello, 1000);
console.log(`Me First`);

function printHello() {
  console.log(`Hello`);
}
function blockFor1sec() {
  // block in the javascript thred for 1 sec
}
setTimeout(printHello, 0);
blockFor1sec();
console.log(`ME first`);
