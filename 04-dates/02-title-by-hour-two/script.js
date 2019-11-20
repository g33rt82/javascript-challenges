/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        var textbox = document.getElementById("target");
        // your code here
        var currenthours = new Date().getHours();
        var currentMinuts = new Date().getMinutes();

        if (currenthours < 18) {
//it's before 18h
            if (currenthours > 16) {
                // it's later than 17h but earlier than 18h ...
                if (currentMinuts > 30) {
                    // it's later than 17h30 ...
                    textbox.innerHTML = "Good evening";
                }
                // it's earlier than 17h31...
                else {
                    textbox.innerHTML = "Hello";
                }
            }
            // it's 16h or earlier...
            else {
                textbox.innerHTML = "Hello";
            }

        }
        // it's later than 18h...
        else {
            textbox.innerHTML = "good evening";
        }
    }
)();
