/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here


    document.getElementById("run").addEventListener("click", event => {
        const input1 = document.getElementById("pass-one");
        const input2 = document.getElementById("pass-two");
        const inputboxes = document.querySelector("#pass-one, #pass-two");
        console.log(inputboxes);
        debugger;
        if (input1.value !== input2.value) {
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
        }
        else {
            input1.style.borderColor = "green";
            input2.style.borderColor = "green";
        }
    });

})();
