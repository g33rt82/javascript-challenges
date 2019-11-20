/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async function () {

        const heroName = document.getElementById("hero-name");
        const heroalterEgo = document.getElementById("hero-alter-ego");
        const heropowers = document.getElementById("hero-powers");
        const apiPath = 'http://localhost:3000/heroes';
        const abilitiesArray = heropowers.value.split(', ');
        console.log(abilitiesArray);

        if (heroName.value && heroalterEgo.value && heropowers.value !== "" ){
            try{
                const voegToe = await fetch(`${apiPath}`, {method: 'POST', body: `{name: ${heroName}, alterEgo: ${heroalterEgo}, abilities: ${abilitiesArray}}`, headers: {'Content-type': 'application/json'}})

            }
            catch(error){ console.log(error)}
        }

    })
})();
