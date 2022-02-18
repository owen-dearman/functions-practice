//Function to take an array of numbers and return an array with signs flipped

/*
Function invertNumbers
Parameters:
- NUMBERS
    array of numbers
Returns:
- INVERTED-NUMBERS
    array of numbers
=============================

Function invertNumbers
set INVERTED-NUMBERS to an empty array
for NUMBER of NUMBERS do
    set INV-NUMBER to NUMBER multiplied by -1
    add INV-NUMBER to the end of INVERTED-NUMBERS
endfor

return INVERTED-NUMBERS

============================
Test Cases

invertNumbers([1, 2, 3]) // ==> [-1, -2, -3]
invertNumbers([-1, -2, -3]) // => [1, 2, 3]
invertNumbers([-1, 10, 50, -50]) // => [1, -10, -50, 50]
invertNumbers([0]) // => [0]
invertNumbers([]) // => []
*/

/**
 * 
 * @param {number} number - to invert
 * @returns {number} inverted
 */

function numberInvert(number){
    return number *-1;
}


/**
 * Function to invert psotivity of numbers
 * @param {array} numbers - array of numbers
 * @returns {array} inverted array of numbers
 */

 function invertNumbers(numbers){
    let invertedNumbers = numbers.map(numberInvert);
    return invertedNumbers;
}

//Test Cases
console.log("invertNumbers([1,2,3])",invertNumbers([1,2,3])," [-1, -2, -3]")
console.log("invertNumbers([-1,-2,-3])",invertNumbers([-1,-2,-3])," [1, 2, 3]")
console.log("invertNumbers([-1,10,50,-50])",invertNumbers([-1,10,50,-50])," [1, -10, -50, 50]")
console.log("invertNumbers([0])",invertNumbers([0])," [-0]")
console.log("invertNumbers([])",invertNumbers([])," []")