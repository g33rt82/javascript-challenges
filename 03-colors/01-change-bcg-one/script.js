/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
debugger;
(function () {
    // your code here
    const buttons = document.getElementsByTagName('button');
    Array.from(buttons).forEach(function (element) {
        element.addEventListener('click', event =>
            document.body.style.backgroundColor = element.id)
    })

})();





