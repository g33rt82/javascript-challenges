/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click",function() {
            const values = "0123456789ABCDEF";
            var arrayValues = values.split("");
            console.log(arrayvalues);
            Math.floor(Math.random() * 16)
            var color = "#";
            for (i = 1; i < 7; i++) {

                color += arrayValues[Math.floor(Math.random() * 16)];
                console.log(color, i);
            }
            document.body.style.backgroundColor = color;
            console.log(color);
        });

})();
