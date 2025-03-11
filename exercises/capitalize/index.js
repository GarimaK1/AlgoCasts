// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}

// function capitalize(str) {
//     // let newStr = "a short sentence. how about now? let's see. look, this is it."
    
//     let new2 = str.split(' ');
//     let new3 = [];
//     for (let ele of new2) {
//         new3.push(ele[0].toUpperCase() + ele.slice(1));
//     }

//     return new3.join(' ');
// }

// function capitalize(str) {
//     // let newStr = "a short sentence. how about now? let's see. look, this is it."
    
//     let final = [];

//     for (let ele of str.split(' ')) {
//         final.push(ele[0].toUpperCase() + ele.slice(1));
//     }

//     return final.join(' ');
// }

// function capitalize(str) {
//     // let newStr = "a short sentence. how about now? let's see. look, this is it."
//     let final = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         if (str[i-1] === ' ') {
//             final = final + str[i].toUpperCase();
//         } else {
//             final = final + str[i];
//         }
//     }

//     return final;
// }

module.exports = capitalize;
