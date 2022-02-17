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
set LOWERCASE-DOMAINS to an empty array

for DOMAIN of DOMAINS do
    set LOWERCASE-DOMAIN to DOMAIN in all lowercase
    add LOWERCASE-DOMAIN to the end of LOWERCASE-DOMAINS
endfor
return LOWERCASE-DOMAINS

===================================================
lowercaseDomains([bbc.co.uk]) // => [bbc.co.uk]
lowercaseDomains([bbc.co.uk, HI.COM]) // => [bbc.co.uk, hi.com]

*/

// JavaScript *******************************************************

/**
 * An array of domains returning an array of domains in lowercase
 * @param {array} domains - array of domains
 * @return {array} array of lowercase domains
 */

function lowercaseDomains(domains){
    let lowercaseDomains = [];
    for (let domain of domains){
        let lowercaseDomain = domain.toLowerCase();
        lowercaseDomains.push(lowercaseDomain);
    }
    return lowercaseDomains
}

//Test Cases *******************************************************

console.log("lowercaseDomains(['bbc.co.uk']): ", lowercaseDomains(["bbc.co.uk"]), " should equal ['bbc.co.uk']")
console.log("lowercaseDomains(['bbC.co.uk','HI.CO.UK','hello']): ", lowercaseDomains(["bbC.co.uk", "HI.CO.UK", "hello"] ), " should equal ['bbc.co.uk', 'hi.co.uk', 'hello']")
console.log("lowercaseDomains([]): ", lowercaseDomains([]), " should equal []")
console.log("lowercaseDomains(['hI.cOm']): ", lowercaseDomains(["hI.cOm"]), " should equal ['hi.com'] ")
console.log("lowercaseDomains(['HOWDY.COM', 'ACADEMY.TECH']): ", lowercaseDomains(["HOWDY.COM", "ACADEMY.TECH"]), " should equal ['howdy.com', 'academy.tech']")