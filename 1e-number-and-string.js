"use strict"
//Function that takes an array of numbers and returns an array of plain objects, with properties

/*
Function numberAndString
Parameters:
- NUMBERS 
    array of numbers
Returns:
- NUMBER-AND-STRING
    array of plain objects with
            - asNumber
                    the original number
            - asString
                    the string representation
=============================================

set NUMBER-AND-STRING to an empty array
for NUMBER in NUMBERS do
    set asNumber to NUMBER
    set asString to a string containing NUMBER
    set NUMBER-OBJECT to an object containing asNumber and asString
    add NUMBER-OBJECT to the end of NUMBER-AND-STRING
endfor

return NUMBER-AND-STRING

[4, -3.2] // => [{asNumber: 4, asString: '4'}, {asNumber: -3.2, asString = -3.2}]
[1, 2, 3] // => [{asNumber: 1, asString: '1'}, {asNumber: 2, asString: '2'}, asNumber: 3, asString: '3'}]
                
*/

/**
 * Returns an array of objects with number and string
 * @param {array} numbers - array of numbers
 * @returns {object} number and string
 */

function numberAndString(numbers){
    let numberStringObjects = [];
    for (let number of numbers){
        let numberMode = {asNumber: number};
        let stringMode = {asString: number.toString()};
        let indObject = Object.assign(numberMode, stringMode);
        numberStringObjects.push(indObject);
    }
    return numberStringObjects;
}