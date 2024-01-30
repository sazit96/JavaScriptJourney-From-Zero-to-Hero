var num1 = 2;
var sum = function () {
  var num2 = 5;
  return function () {
    return num1 + num2;
  };
};
console.log(sum());
var mysum = sum();
console.dir(mysum);

function bankAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}
const account = bankAccount(100000);
console.dir(account);

function stopWatch() {
  var startTime = Date.now();
  return function getDelay() {
    console.log(Date.now() - startTime);
  };
}
var timer = stopWatch();
for (var i = 0; i < 10000000; i++) {
  var a = Math.random() * 10000;
}
timer();
console.dir(timer);
timer = null;
timer();

function async() {
  var a = 20;
  var myFunc = () => console.log(a);
  setTimeout(myFunc, 3000);
}

async();
