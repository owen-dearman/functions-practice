//Function that takes an array of strings and returns an array with the length of each string

/*
Function countStrings
Parameters:
- STRINGS
    array of strings
Returns:
- STRING-COUNTS
    array of numbers
=================================

set STRING-COUNTS to an empty array

for STRING in array STRINGS do
    set STRING-LENGTH to length of STRING
    add STRING-LENGTH to end of STRING-COUNTS
endfor

return STRING-COUNTS
====================================
Test Cases

countStrings(["banana"]) // => [6]
countStrings(["apple", "cheese", "lemonade"]) // => [5, 6, 8]
*/

/**
 * 
 * @param {string} word - string to get count of 
 * @returns {number} - length of string
 */

function lengthGenerator(word){
    return word.length;
}

/**
 * Function that counts length of strings in array
 * @param {array} strings - array of strings
 * @returns {array} length of strings in array
 */

 function countStrings(strings){
    let stringCounts = strings.map(lengthGenerator);
    return stringCounts;
}

//Test Cases
console.log("countStrings(['banana'])", countStrings(["banana"]), " [6]")
console.log("countStrings(['apple', 'cheese', 'lemonade'])", countStrings(["apple", "cheese", "lemonade"]), " [5, 6, 8]")