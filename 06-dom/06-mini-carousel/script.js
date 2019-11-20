/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let img = document.querySelector("img");
    let currentIndex = gallery.indexOf(img.getAttribute("src"));
        document.getElementById("next").addEventListener("click", event => {
            debugger;
            if (currentIndex == 4) {
                currentIndex  = 0;
                img.setAttribute("src", gallery[currentIndex]);
            }
           else {
                currentIndex  += 1;
                img.setAttribute("src", gallery[currentIndex]);
            }
            }
        );

})();
