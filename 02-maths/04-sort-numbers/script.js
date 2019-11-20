/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

        // your code here
    document.getElementById("run").addEventListener("click", output);

   function output(){
       var input = document.getElementById("numbers").value;
       console.log(input);
       //input is currently stringvalue, if we want to sort we need individual values.. so let's split them
       var output = input.split(", ");
       console.log(output);
       // after the split we have an array of strings, let's convert the array of strings into an array of integers
       var numbers = output.map(element => parseInt(element));
       console.log(numbers);
       //sort the numbers in ascending order
       var sortedNumbers= numbers.sort(function(a,b){ return b - a; });
       console.log(sortedNumbers);
       // to display the numbers in the inputfield we must convert them back to a string, since the type of field is "text"
       var sortedNumbersToText= sortedNumbers.toString();
       console.log(sortedNumbersToText);
       document.getElementById("numbers").value = sortedNumbersToText;
   }
})();
