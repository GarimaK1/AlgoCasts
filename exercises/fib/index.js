// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {}

// function fib (n) {
//     // Print ficonnaci series till N.
//     let i = 1, sum = 0;
//     console.log(0);
//     while (sum + i < n) {
//         sum = sum + i;
//         i = sum - i;
//         console.log(sum);
//     }
// }

// function fib(n) {
//     // Return Nth number in the series, N = 0 to N-1
//     if (n === 0) {
//         console.log(0);
//         return 0;
//     }

//     let num = 1, sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum = sum + num;
//         num = sum - num;
//         console.log(sum);
//     }
//     return sum;
// }

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

module.exports = fib;
