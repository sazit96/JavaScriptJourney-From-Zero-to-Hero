
//              //find the sum of all number
// function sum (numbers) {
//     let sum = 1;
//     for(let i=0; i<numbers.length; i++)
//      sum += numbers[i];
//     return sum;
// }
//               // Recursive way
// function sum (numbers) {
//     if(numbers.length === 1) {
//         return numbers[0];
//     } 
//     else {
//         return numbers[0] + sum(numbers.slice(1));
//     }
// }
// console.log(sum([1,2,3,4,5]));


//              //find the Factorial of a number.
// function factorial (num) {
//     let sum = 0;
//     for(let i=1; i <= num; i++ ) 
//      sum *= i;
//     return sum;
// }
// console.log(factorial(7));
//            // Recursive way
// function factorial (num) {
//     if(num===0) return 1;
//     return num * factorial (num - 1);
// }
// console.log(factorial(7));


//find the fibonacci number 
function fibonacci (n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let prv = 0, cur = 1;
    for(let i = n; i > 1; i--) {
        let nxt = prv + cur;
        prv = cur; 
        cur = nxt;
    }
    return cur;
}

console.log(fibonacci(6));