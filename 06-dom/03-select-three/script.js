/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    debugger;
    const elements = document.getElementsByClassName("target");
    console.log(elements);
    //elements.forEach(element => element.textContent = "owned");
    for (i = 0; i < elements.length; i++) {
        elements[i].textContent = "owned";
    }
}());

