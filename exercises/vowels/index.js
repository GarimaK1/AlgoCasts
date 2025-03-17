// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {}

// function vowels(str) {
//     let count = 0;
//     debugger;
//     for (let char of str) {
//         debugger;
//         switch(char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 count++;
//                 debugger;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// function vowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// function vowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if ('aeiou'.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// function vowels(str) {
//     let reg = /[aeiou]/gi;
//     let matches = str.match(reg);
//     return matches ? matches.length : 0; 
// }


module.exports = vowels;
