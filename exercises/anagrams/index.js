// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

}

/*
function anagrams(stringA, stringB) {
    let str1 = stringA.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    let str2 = stringB.replace(/\W/g, '').toLowerCase().split('').sort().join('');

    console.log(str1, str2);
    if (str1 === str2) {
        return true;
    }

    return false;
}
*/

/*
function anagrams(stringA, stringB) {
    let strObj1 = buildCharObj(stringA);
    let strObj2 = buildCharObj(stringB);

    if (Object.keys(strObj1).length !== Object.keys(strObj2).length) {
        // Both have different number of character types. So cannot be anagrams.
        return false;
    }

    for (let key in strObj1) {
        if (strObj1[key] !== strObj2[key]) {
            return false;
        }
    }

    //If we've reached here, means the strings are anagrams
    return true;
}

function buildCharObj(str) {
    let charObj = {};
    // Replace all characters not in [A-Za-z0-9_] with '' and convert to lowercase
    for (let c of str.replace(/\W/g, '').toLowerCase()) {
        //         if (!charObj[c]) {
        //             charObj[c] = 1;
        //         } else {
        //             charObj += 1;
        //         }
        charObj[c] = charObj[c] + 1 || 1;
    }
    return charObj;
}
*/

/*
function anagrams(stringA, stringB) {
    let str1 = stringA.replace(/\W/g, '').toLowerCase();
    let str2 = stringB.replace(/\W/g, '').toLowerCase();
    let charObj1 = {}, charObj2 = {};
    for (let c of str1) {
        if (!charObj1[c]) {
            charObj1[c] = 1;
        } else {
            charObj1[c] += 1;
        }
    }
    console.log(charObj1);

    for (let c of str2) {
        if (!charObj2[c]) {
            charObj2[c] = 1;
        } else {
            charObj2[c] += 1;
        }
    }
    console.log(charObj2);

    if (str1.length !== str2.length) {
        // Both have different number of character types. So cannot be anagrams.
        return false;
    }
    for (let key in charObj1) {
        if (charObj1[key] !== charObj2[key]) {
            return false;
        }
    }
    return true;
}
*/

module.exports = anagrams;
