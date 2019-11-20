/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () {
        const input = document.getElementById("target").innerText;
        const inputLength = document.getElementById("target");
        let size = 0;
        let counter = 0;
        const sizes = [5,10,15,20,25,20,15,10,5,10,15,20,25,20,15,10,5];

        function wrapWithTag(content, tag, size) {
            let wave = `style = font-size:${size}px`;
            return `<${tag} ${wave}>${content}</${tag}>`;

        }


        const splittedInput = input.split(" ");
        console.log(splittedInput);
        let nieuw = [];

        function displayResult() {

            const result = splittedInput.forEach(value => nieuw.push(wrapWithTag(value, 'span', getSize())));
            console.log(nieuw);
            document.getElementById("target").innerHTML = nieuw.join('');

        }

        function getSize() {

         counter += 1;
         return sizes[counter -1];

        }

        displayResult();


    }

)
();
