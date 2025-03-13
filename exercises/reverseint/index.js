// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let rev;
    let reversedStr = n.toString().split('').reverse().join('');
    rev = parseInt(reversedStr);
    return rev * Math.sign(n);
}

// function reverseInt(n) {
//     switch(Math.sign(n)) {
//         case +1:
//             return parseInt(n.toString().split('').reverse().join(''), 10);
//         case -1:
//             return -parseInt(n.toString().split('').reverse().join(''), 10);
//         case 0:
//             return 0;
//         case -0:
//             return -0;
//     }
// }

// function reverseInt(n) {
//     let rev, temp;
//     if (Math.sign(n) > 0) {
//         return parseInt(n.toString().split('').reverse().join(''));
//     } else if (Math.sign(n) < 0) {
//         temp = n.toString().split('');
//         rev = parseInt(temp.splice(1).reverse().join(''));
//         return 0-rev;
//     } else { // n is 0
//         return n;
//     }
// }

// function reverseInt(n) {
//     let sign = '', rev;
//     let temp = (n + '').split(''); // temp = n.toString().split('')
//     if (temp[0] === '+' || temp[0] === '-') {
//         sign = temp[0];
//         rev = temp.splice(1).reverse().join('');
//     } else {
//         rev = temp.reverse().join('');
//     }
//     return parseInt(sign + rev);
// }

// function reverseInt(num) {
//     let str = num.toString();
//     let revArr = str.split('').reverse();
//     let revStr = '';
    
//     if (Math.floor(num / 10) === 0) {
//         // If 0/-0/+0, or single digit, return as it is.
//         return num;
//     } else if (num < 0) {
//         // Negative integer
//         revArr.pop();
//         revStr = revArr.join('').replace(/[\s]/g, '');
//         return parseInt(`-${revStr}`);
//     } else {
//         // Positive Integer
//         revStr = revArr.join('').replace(/[\s]/g, '');
//         return parseInt(revStr);
//     }
// }


// function reverseInt(num) {
//     let str = num.toString();
//     let revStr = '';
//     if (Math.floor(num / 10) === 0) {
//         return num;
//     } else {
//         for (let char of str) {
//             revStr = char + revStr;
//         }
//         if (num < 0) {
//             revStr.replace(/[\-\s]/g, '');
//             return parseInt(`-${revStr}`);
//         } else {
//             return parseInt(revStr.replace(/[\s]/g, ''));
//         }   
//     }
// }

module.exports = reverseInt;
