/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("pass-one").addEventListener("keydown", event => {
        let input = document.getElementById("pass-one").value;
        let inputLength =  input.length;
        const maxLength = 9;
        if ( event.keyCode !== 8){
            document.getElementById("counter").innerText = `${inputLength+1}/10`;
            if (inputLength === maxLength){
              // input.substring(0 ,maxLength);
                event.preventDefault();
            }
        }
        else {
            if(inputLength > 0) {
            document.getElementById("counter").innerText = `${inputLength-1}/10`;
            }
            else {
                document.getElementById("counter").innerText = "0/10";
            }
        }

    } );


})();
