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

// function pyramid(n) {}


// My solution (n, row, col = 1 to 5):
// n = 1 -> '#'
// n = 2 -> ' # ' 
//          '###'
// n = 3 -> '  #  '
//          ' ### '
//          '#####'
// n = 4 -> '   #   '
//          '  ###  '
//          ' ##### '
//          '#######'
// n = 5 -> '1234#6789' numOfSymbols = 1, numOfSpaces = 9 - 1 = 8, row 1
//          '123###789' numOfSymbols = 3, numOfSpaces = 9 - 3 = 6, row 2
//          '12#####89' numOfSymbols = 5, numOfSpaces = 9 - 5 = 4, row 3
//          '1#######9' numOfSymbols = 7, numOfSpaces = 9 - 7 = 2, row 4
//          '#########' numOfSymbols = 9, numOfSpaces = 9 - 9 = 0, row 5
// row = n, col = 2n - 1
// 9/2 = 4.5
// 9 - 2row - 1 = 9 - 3 = 6/2 = 3. 2row-1. 

// function pyramid(n) {
//     for (let row = 1; row <= n; row++) {
//         let str = '';
//         for (let col = 1; col <= 2*n - 1; col++) {
//             let spacesBefore = ((2*n - 1) - (2*row - 1)) / 2;
//             let spacesAfter = spacesBefore + (2*row - 1);
//             if (col <= spacesBefore || col > spacesAfter) {
//                 str += ' ';
//             } else {
//                 str += '#';
//             }
//         }
//         console.log(str);
//     }
// }





// Stephen's Solution (row, column = 0 to 4)
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



// Solution from comments in Stephen's course:
// https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8546988#questions/12374812
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//       console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i));
//   }
// }


module.exports = pyramid;
