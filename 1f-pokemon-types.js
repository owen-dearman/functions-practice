//Function that takes an object and returns a descriptive sentence about the Pokemon
"use strict"

/*
Function pokemonTypes
Parameters: 
- POKEMON-INFORMATION
    array of objects
Returns:
- POKEMON-DESCRIPTION
    string

=============================================

set POKEMON-DESCRIPTION to an empty set
for POKEMON of POKEMON-INFORMATION do
    set NAME to the name of the Pokemon
    set TYPE to the breed of Pokemon
    set DESCRIPTIVE-SENTENCE to a string of "NAME is a TYPE type Pokemon"
    add DESCRIPTIVE-SENTENCE to the end of POKEMON-DESCRIPTION
endfor

return POKEMON-DESCRIPTION

===========================================

Test Cases

[{name: "Bob", type: "legendary"}] // => ["Bob is a legendary type Pokemon"]
[{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]
 // => ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]
*/