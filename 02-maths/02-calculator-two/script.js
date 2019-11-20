/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const input1 = document.getElementById("op-one");

const input2 = document.getElementById("op-two");
const output =  document.createElement("div");
let result = 0;
const buttons = document.querySelectorAll("button");
content= document.querySelector(".content");
console.log(typeof buttons);

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.target.id);
        switch (event.target.id) {
            case "addition":
                result=  Number(input1.value) + Number(input2.value);
                console.log(result);
                output.value = result.toString();
                console.log = output;
                content.appendChild(output);
                break;
            case "substraction":
                result=  Number(input1.value) - Number(input2.value);
                console.log(result);
                output.innerText = result;
                document.body.appendChild(output);
                break;
            case "multiplication":
                result=  Number(input1.value) * Number(input2.value);
                console.log(result);
                output.innerText = result;
                document.body.appendChild(output);
                break;
            case "division":
                result=  Number(input1.value) / Number(input2.value);
                console.log(result);
                output.innerText = result;
                document.body.appendChild(output);
                break;
        }
    })

});
console.log(input1.value);
console.log(input2.value);









