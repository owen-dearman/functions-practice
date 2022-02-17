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
    set GREETING-TEMPLATE to be a string "Hello, !"
    splice NAME into GREETING-TEMPLATE at index 6.
    add GREETING-TEMPLATE to the end of GREETING-NAMES
endfor

return GREETING-NAMES   


==========================
greetings(["Sam"]) // => ["Hello, Sam!"]
greetings(["Bob", "Jimmy", "Sara"]) // => ["Hello, Bob!", "Hello, Jimmy!", "Hello, Sara!"]
greetings([]) // => []

*/