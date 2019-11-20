/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    let timeout = 0;
 //   const hide = "style=display:none";
 //   const hideEverything = (content,tag) => `<${tag} ${hide}>${content}</${tag}`;
 //   const wrapWithTags = (content,tag) => `<${tag}>${content}</${tag}`;

    // your code here
 let text = document.getElementById("target").innerHTML;
 document.getElementById("target").style.display = "none";
 var arrayElements =  text.split("");
 //document.getElementById("target").
 let newtext = document.createElement("p");
 let parent = document.querySelector(".material");
 let i= 0;
 parent.appendChild(newtext);
 console.log(text);
 function startTyping() {
     if (i < text.length) {
         newtext.innerHTML += arrayElements[i];
         i++;
         setTimeout(startTyping,Math.floor(Math.random() * 75));
     }
 }

startTyping();
})();
