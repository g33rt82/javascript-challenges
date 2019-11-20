/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    debugger;
    document.getElementById("run").addEventListener("click", event => {
        const input1 = document.getElementById("pass-one");
        const input2 = document.getElementById("pass-two");
        const inputboxes = document.querySelectorAll("#pass-one, #pass-two");
        if (input1.value !== input2.value) {
            inputboxes.forEach(node => node.classList.add("error"));


        }

    })
})();
