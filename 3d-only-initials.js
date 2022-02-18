// Function that takes an array of names and returns an array of initials
"use strict"
/*
Function onlyInitials
Parameters:
- NAMES
    array of strings
Returns:
-  INITIALS
    array of strings

========================
set INITIALS to an empty array

for NAME of array NAMES do
    set NAME-TO-INITIALS to a an array of NAME containing only the capital letters
    set INDIVIDUAL-INITALS to a string of NAME-TO-INITIALS separated by "."
    add a "." to the end of INDIVIDUAL-INITIALS
    add INDIVIDUAL-INITIALS to the end of INITIALS
endfor

return INITIALS

==============================

onlyInitials(["Ben Johnson"]) // => ["B.J."]
onlyInitials(["Adam Bowler", "Claire Devilson", "Edward Fox"]) // => ["A.B.", "C.D.", "E.F."]

*/
/**
 * 
 * @param {string} name - name to initialise
 * @returns {string} initials
 */

function produceInitials(name){
    let nameArray = name.split(" ");
    let firstInitial = nameArray[0].slice(0,1);
    let secondInitial = nameArray[1].slice(0,1);
    return `${firstInitial}. ${secondInitial}.`
}


/**
 * Returns array of initials from array of names
 * @param {array} names - array of names
 * @returns {array} array of initials
 */

function onlyInitials(names){
    let initials = names.map(produceInitials);
    return initials;
}

//Test Cases
console.log("onlyInitials(['Ben Johnson'])",onlyInitials(["Ben Johnson"]) ," ['B.J.']")
console.log("onlyInitials('Adam Bowler', 'Claire Devilson', 'Edward Fox')",onlyInitials(["Adam Bowler", "Claire Devilson", "Edward Fox"]) ," ['A.B.', 'C.D.', 'E.F.']")