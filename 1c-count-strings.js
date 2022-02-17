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

countStrings(["banana"]) // => [7]
countStrings(["apple", "cheese", "lemonade"]) // => [5, 6, 8]
*/

/**
 * Function that counts length of strings in array
 * @param {array} strings - array of strings
 * @returns {array} length of strings in array
 */

function countStrings(strings){
    let stringCounts = [];
    for (let string of strings){
        let stringLength = string.length();
        stringCounts.push(stringLength);
    }
    return stringCounts;
}