/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("run").addEventListener("click", function() {
        var input= parseInt(document.getElementById("number").value);
        console.log(input);
        // your code here
          if  (input == 0 ) {
              output = 1;

          }
          else if (input == 1){
              output = 1
        }
        else {
              output= input;
             while(input >= 2){
                output =  output*(input -1);
                 input--;
console.log(output);
              }
        }
        document.getElementById("number").value = output;


    });

})();
