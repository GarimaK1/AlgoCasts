// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, ch) => ch + rev, '');
}

reverse('reverse');

// function reverse(str) {
//     let revStr = '';
//     for (let i = str.length-1 ; i >= 0; i--) {
//         revStr = revStr + str.charAt(i);
//     }
//     return revStr;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reversed = '';
//     for (let c of str) {
//         reversed = c + reversed;
//     }
//     return reversed;
// }

module.exports = reverse;
