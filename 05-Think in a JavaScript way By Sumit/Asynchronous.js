const processOrder1 = (customer) => {
  console.log(`Processing Order For Customer 1`);
  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log(`Ordeer Processed For Customer 1`);
};
console.log(`Take Order For Customer 1`);
processOrder1();
console.log(`Completed Order For Customer 1`);

const processOrder2 = (customer) => {
  console.log(`Processing Order For Customer 2`);
  setTimeout(() => {
    console.log(`Complete Order`);
    console.log(`Ordeer Processed For Customer 2`);
  }, 3000);
};
console.log(`Take Order For Customer 2`);
processOrder2();

const takeOrder = (customer, callback) => {
  console.log(`Take Order For ${customer}`);
  callback(customer);
};
const processOrder = (customer, callback) => {
  console.log(`Processing Order For ${customer}`);
  setTimeout(() => {
    console.log(`Cooking Completed`);
    console.log(`Order Processed For ${customer}`);
    callback(customer);
  }, 3000);
};
const CompleteOrder = (customer) => {
  console.log(`Completed Order For ${customer}`);
};
takeOrder("Customer 1", (customer) => {
  processOrder(customer, (customer) => {
    CompleteOrder(customer);
  });
});
