// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
// Stephen's Solution:
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//
//     console.log(level);
//   }
// }

// Stephen's Solution in other words:
// n = 5 -> '0123#5678' numOfSymbols = 1, row 0, midpoint = 4
//          '012###678' numOfSymbols = 3, row 1, midpoint = 4
//          '01#####78' numOfSymbols = 5, row 2, midpoint = 4
//          '0#######8' numOfSymbols = 7, row 3, midpoint = 4
//          '#########' numOfSymbols = 9, row 4, midpoint = 4

// So, column = midpoint, midpoint +- row has to be '#' symbol.
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   // for n = 5, midpoint = Math.floor(4.5) = 4

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//         if (column <= midpoint + row && column >= midpoint - row) {
//             // row 0. column 0 to 8. column <= 4 && column >= 4
//             // row 1. column 0 to 8. column <= 5 && column >= 3
//             // row 2. column 0 to 8. column <= 6 && column >= 2
//             // row 3. column 0 to 8. column <= 7 && column >= 1
//             // row 4. column 0 to 8. column <= 8 && column >= 0
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }