"use strict" //Use strict mode

//Function that takes an array of domains and returns them in lower case

/*
Function = lowercaseDomains
Parameters
- DOMAINS
    an array of strings

Return
- LOWERCASE-DOMAINS
    an array of strings

==============================================

set LOWERCASE-DOMAINS to DOMAINS mapped where each domain is lower case
return LOWERCASE-DOMAINS

===================================================
lowercaseDomains([bbc.co.uk]) // => [bbc.co.uk]
lowercaseDomains([bbc.co.uk, HI.COM]) // => [bbc.co.uk, hi.com]

*/

// JavaScript *******************************************************
/**
 * 
 * @param {string} text - the text to make lower case
 * @returns {string} string lin lower case
 */

 function makeLowerCase(text){
    return text.toLowerCase();
}

/**
 * An array of domains returning an array of domains in lowercase
 * @param {array} domains - array of domains
 * @return {array} array of lowercase domains
 */

function lowercaseDomains(domains){
    let lcDomains = domains.map(makeLowerCase);
    return lcDomains
}


//Test Cases *******************************************************

console.log("lowercaseDomains(['bbc.co.uk']): ", lowercaseDomains(["bbc.co.uk"]), " should equal ['bbc.co.uk']")
console.log("lowercaseDomains(['bbC.co.uk','HI.CO.UK','hello']): ", lowercaseDomains(["bbC.co.uk", "HI.CO.UK", "hello"] ), " should equal ['bbc.co.uk', 'hi.co.uk', 'hello']")
console.log("lowercaseDomains([]): ", lowercaseDomains([]), " should equal []")
console.log("lowercaseDomains(['hI.cOm']): ", lowercaseDomains(["hI.cOm"]), " should equal ['hi.com'] ")
console.log("lowercaseDomains(['HOWDY.COM', 'ACADEMY.TECH']): ", lowercaseDomains(["HOWDY.COM", "ACADEMY.TECH"]), " should equal ['howdy.com', 'academy.tech']")