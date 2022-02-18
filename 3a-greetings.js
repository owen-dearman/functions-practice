//Function that takes and array of names and returns an array with a greeting for each of those names
/*
Function: greetings
Parameters:
- NAMES
    array of strings
Returns:
- GREETING-NAMES
    array of strings

=========================
set GREETING-NAMES to an empty array

for NAME in array NAMES do
    set GREETING-TEMPLATE to a string of "Hello, NAME!"
    add GREETING-TEMPLATE to the end of GREETING-NAMES
endfor

return GREETING-NAMES   


==========================
greetings(["Sam"]) // => ["Hello, Sam!"]
greetings(["Bob", "Jimmy", "Sara"]) // => ["Hello, Bob!", "Hello, Jimmy!", "Hello, Sara!"]
greetings([]) // => []

*/

/**
 * Provides a greeting for each name in the array
 * @param {array} names - array of names
 * @returns {array} greeting for each name
 */

function greetMe(name){
    return `Hello, ${name}!`
}

 function greetings(names){
    let nameGreetings = names.map(greetMe);
    return nameGreetings
}

//Test Cases
console.log("greetings(['Sam'])", greetings(["Sam"]), " [Hello, Sam!]")
console.log("greetings(['Bob', 'Jimmy', 'Sara'])", greetings(["Bob", "Jimmy", "Sara"]), "['Hello, Bob!', 'Hello, Jimmy!', 'Hello, Sara!']")