// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {}

// function palindrome(str) {

//     for (let i = 0; i < Math.floor(str.length/2); i++) {
//         if (str[i] !== str[str.length - i - 1]){
//             return false;
//         }
//     }
//     return true;
//     // 'abcdefg'
//     // str.length = 6
//     // str.length/2 = 3
//     // Math.floor(str.length/2) = 3
//     // 0 1 2 3 4 5 6
//     // a b c d
// }

// function palindrome(str) {
//     return str.split('').every((ele, index) => {
//         return ele === str[str.length - index - 1];
//     })
// }

// function palindrome(str) {
//     let rev = str.split('').reverse().join('');
//     return str === rev;
// }

module.exports = palindrome;
