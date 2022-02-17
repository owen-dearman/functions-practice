// Function that takes an array of names and returns an array of initials

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
 * Returns array of initials from array of names
 * @param {array} names - array of names
 * @returns {array} array of initials
 */

function onlyInitials(names){
    let initials = [];
    for (let name of names){
        let nameToInd = name.exec(/[A-Z]/);
        let indInitials = nameToInd.join(".");
        indInitials = indInitials + ".";
        initials.push(indInitials);
    }
    return initials;
}