/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //   let input = document.getElementById("pass-one").value;
    const regex = /\d+/g;
    let counter = 0;
    document.getElementById("pass-one").addEventListener("keyup", event => {
        let currentInput = event.target.value;
        console.log(currentInput);
        if (currentInput.length > 7) {
            let result = [...currentInput.match(regex)];
            console.log(result);
            console.log(result.length);
            const stringDigitsCount = result.length;
            for (i = 0; i < 8; i++) {
                if (result[i] = "0") {
                    counter += 1;
                }
            }
            if (result.length === 1) {
                console.log(result[0].length);
            }
        }
    })
}());
