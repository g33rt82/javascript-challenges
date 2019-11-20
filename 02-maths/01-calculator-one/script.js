/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var resultNode = document.createElement('div');

    document.getElementById("addition").addEventListener("click", function() {
        debugger;
        // perform an addition
        var input1 = parseInt(document.getElementById("op-one").value);
        var input2 = parseInt(document.getElementById("op-two").value);
        var result = input1 + input2;
        resultNode.innerText= `the result is: ${result}`;
        document.body.append(resultNode);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var input1 = parseInt(document.getElementById("op-one").value);
        var input2 = parseInt(document.getElementById("op-two").value);
        var result = input1 - input2;
        resultNode.innerText= `the result is: ${result}`;
        document.body.append(resultNode);

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var input1 = parseInt(document.getElementById("op-one").value);
        var input2 = parseInt(document.getElementById("op-two").value);
        var result = input1 * input2;
        resultNode.innerText= `the result is: ${result}`;
        document.body.append(resultNode);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var input1 = parseInt(document.getElementById("op-one").value);
        var input2 = parseInt(document.getElementById("op-two").value);
        var result = input1 / input2;
        resultNode.innerText= `the result is: ${result}`;
        document.body.append(resultNode);
    });


})();

