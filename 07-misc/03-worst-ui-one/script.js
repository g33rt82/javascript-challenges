/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

 //   document.getElementById("target").innerHTML = `04${value}`;

        document.getElementById("slider").oninput = function() {
            myFunction()
        };


    function myFunction() {
        var val = document.getElementById("slider").value //gets the oninput value
        document.getElementById('target').innerHTML = `0${val}`;val //displays this value to the html page
       // console.log(val)
    }

})();
