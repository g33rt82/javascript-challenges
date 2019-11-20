/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let phoneNumberText = document.getElementById("target").innerText;
    let phone = document.getElementById("target");
    let phoneNumber = parseInt(phoneNumberText.slice(1));

    let partTwo = phoneNumberText.slice(4,6);
    let partThree = phoneNumberText.slice(6,8);
    let partFour = phoneNumberText.slice(8,10);
    console.log(phoneNumberText);
    console.log(phone.innerText);
    // your code here
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach(button => button.addEventListener("click", myFunction));

    function myFunction(button) {
        console.log(button.target.id);
        switch (button.target.id) {
            case "part-one":

                phoneNumber += 1000000;
                phone.innerText = `+${phoneNumber}`;
                console.log(phoneNumberText);
                console.log(phone.innerText);
                const partOne = phone.innerText.slice(1, 4);
                if (partOne === "499") {
                    this.removeEventListener("click", myFunction);
                }
                console.log(`partOne = ${partOne}`);
                this.innerText = partOne;
                break;
            case "part-two":
                phoneNumber += 10000;
                phone.innerText = `+${phoneNumber}`;
                console.log(phoneNumberText);
                console.log(phone.innerText);
                const partTwo = phone.innerText.slice(4,6);
                if (partTwo === "99") {
                    this.removeEventListener("click", myFunction);
                }
                console.log(`partTwo = ${partTwo}`);
                this.innerText = partTwo;
                break;
            case "part-three":
                phoneNumber += 100;
                phone.innerText = `+${phoneNumber}`;
                console.log(phoneNumberText);
                console.log(phone.innerText);
                const partThree = phone.innerText.slice(6,8);
                if (partThree === "99") {
                    this.removeEventListener("click", myFunction);
                }
                console.log(`partThree = ${partThree}`);
                this.innerText = partThree;
                break;
            case "part-four":
                phoneNumber += 1;
                phone.innerText = `+${phoneNumber}`;
                console.log(phoneNumberText);
                console.log(phone.innerText);
                const partFour = phone.innerText.slice(8,10);
                if (partFour === "99") {
                    this.removeEventListener("click", myFunction);
                }
                console.log(`partFour = ${partFour}`);
                this.innerText = partFour;
                break
        }
    }

})();
