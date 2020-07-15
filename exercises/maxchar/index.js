// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {}

// Final Solution:

// function maxChar(str) {
//     let obj = {};
//     for (let c of str) {
//         if (!obj[c]) {
//             obj[c] = 1;
//         } else {
//             obj[c] += 1;
//         }
//     }
//     // console.log(obj);

//     let maxchar = '', occ = 0;
//     for (let i in obj) {
//         if (obj[i] > occ) {
//             maxchar = i;
//             occ = obj[i]
//         }
//     }

//     return maxchar;
// }

// Ways to create the {char: occurance} object mapping

// let obj = {};
// for (let c of str) {
//     if (obj[c] === undefined) {
//         obj = Object.assign(obj, { [c]: 1 });
//     } else {
//         obj[c] += 1;
//     }
// }

// let obj = {};
// for (let c of str) {
//     if (obj[c] === undefined) {
//         obj[c] = 1;
//     } else {
//         obj[c] += 1;
//     }
// }

// let obj = {};
// for (let c of str) {
//     obj[c] = obj[c] + 1 || 1;
// }

// Hint:
// let obj = {}, c = 'f';
// obj[c] = "hello";
// means:
// obj['f'] = 'hello'; //true
// obj.f = 'hello'; // true
// obj[c] = 'hello'; //true

module.exports = maxChar;
