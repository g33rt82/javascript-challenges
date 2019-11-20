/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const randomNumber = Math.floor(Math.random() * 100).toString();
    let guessesCount = 0;
    let question = prompt("what is your Guess?");
    console.log(randomNumber);
   // console.log(question.value);

    function Guess() {

        if (question === randomNumber) {
           // guessesCount += 1;
            alert(`that's it!, you only needed 1 guess, amazing!!!`);
        }
        else {

            if (question > randomNumber && guessesCount === 0) {
                alert('lower');
                guessesCount += 1;
                Guess();
            }
            else if (question < randomNumber && guessesCount === 0) {
                alert('higher');
                guessesCount += 1;
                Guess();
            }
            else {
                let newChanche = prompt("what is your Guess?");
                if (newChanche > randomNumber) {
                    alert('lower');
                    guessesCount += 1;
                    Guess();
                }
                else if (newChanche < randomNumber) {
                    alert('higher');
                    guessesCount += 1;
                    Guess();
                }

                else {
                    guessesCount += 1;
                    alert(`that's it!, you needed ${guessesCount} guesses`);
                }

            }
        }


    }

    Guess();


})();
