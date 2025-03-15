// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let str = '';
//     let numOfSymbols = 0, numOfSpaces = 0;
//     // for n === 1 -> pound -> console.log('#');
//     // for n === 2 -> pound space -> for n = 2
//     //             -> pound pound
//     //     n === 3 -> pound space space
//     //             -> pound pound space
//     //             -> pound pound pound
//     for (let i = 1; i <= n; i++) {
//         numOfSymbols = i, numOfSpaces = n - i;
//         while (numOfSymbols > 0) {
//             str += '#';
//             numOfSymbols--;
//         }
//         while (numOfSpaces > 0) {
//             str += ' ';
//             numOfSpaces--;
//         }
//         console.log(str);
//         str = '';
//     }
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let str = '';
//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 str += '#';
//             } else {
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }

module.exports = steps;
