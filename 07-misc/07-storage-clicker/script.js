/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const incrementButton = document.getElementById("increment");
    const target =  document.getElementById("target");
    incrementButton.addEventListener("click", myFunction);
    let counter = 0;
    let counterValue = localStorage.getItem("counter");
    console.log(counterValue);
    if (counterValue !== null){
        target.innerText = counterValue;
         counter = Number(counterValue);
    }

    function  myFunction() {
        if (counterValue !== null){ //localstrorage is in use ...
            counter +=1;
            target.innerText = counter;
            console.log(counter);
            localStorage.setItem("counter", counter);
        }

        else { // nothing stored in local storage ...
            counter +=1;
            target.innerText = counter ;
            console.log(counter);
            localStorage.setItem("counter", counter)
        }

    }

})();
