// Arithmetic Operators
let x = 10, y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // x power y;
console.log(++x); // this do + first
console.log(x++); // this one after +
console.log(--x); // this one - frist
console.log(x--); // this one after -

//Assigment Operators
let a = 10;
a++;
a += 5;
a *= 2;
a /= 2;

// Comparison Operators
let b = 1;
console.log(b > 0);
console.log(b >= 0);
console.log(b < 0);
console.log(b <= 0)

// Equality 
console.log(b == 0);
console.log(b != 0);
// Strict Equality (type + value)
console.log(b === 'sazit');
console.log(b !== 0);

//Ternary Operators
let points = 110;
let type = points > 100 ? 'GOLD' : 'SILVER';
console.log(type);

//Logical Operators
//Logical AND (&&)
let highIncome = true;
let goodCreditScore = true;
let elegibleForLoan = highIncome && goodCreditScore;
console.log(elegibleForLoan);
//Logical OR (||)
let highIncome = false;
let goodCreditScore = true;
let elegibleForLoan = highIncome || goodCreditScore;
console.log(elegibleForLoan);
//Logical NOT (!);
let highIncome = false;
let goodCreditScore = true;
let elegibleForLoan = highIncome || goodCreditScore;
console.log(!elegibleForLoan);

