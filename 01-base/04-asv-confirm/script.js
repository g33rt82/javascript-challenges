/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var confirmation;
    do {
var nameanswer = prompt('what is your name?');
var genderanswer= prompt('what is your gender?');
var townanswer = prompt('in what city were you born?');

var confirmation = confirm( `your name: ${nameanswer}, your gender: ${genderanswer}, your birthtown: ${townanswer}`)
        } while (confirmation != 1);



})();
