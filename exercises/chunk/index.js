// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    
}

// function chunk(array, size) {
//     let finalarr = [];
//     for (let ele of array) {
//         // We check last element because we need a relation between finalarray and its subarray.
//         // If space exists, it wil be in last subarray.
//         let last = finalarr[finalarr.length - 1];
//         // If last does not exist in finalarr
//         if (!last || last.length === size) {
//             // create neew last and push current element to last
//             finalarr.push([ele]);
//         } else {
//             // else if last exists and has space to accomodate new element, add new element here
//             last.push(ele);
//         }
//     }
//     return finalarr;
// }

// function chunk(array, size) {
//     let finalarr = [];
//     for (ele of array) {
//         let arr = finalarr[0];
//         if (!arr || arr.length === size) {
//             finalarr.unshift([ele]);
//         } else {
//             arr.push(ele);
//         }
//     }
//     return finalarr.reverse();
// }

// function chunk(array, size) {
//     let finalarr = [];
//     for (let i = 0; i <= array.length - 1; i = i + size) {
//         finalarr.push(array.slice(i, i + size))
//     }
//     console.log(finalarr);
//     return finalarr;
// }

// function chunk(array, size) {
//     let finalarr = [];
//     while (array.length > 0) {
//         finalarr.push(array.splice(0, size));
//     }
//     // console.log(finalarr);
//     return finalarr;
// }

module.exports = chunk;
