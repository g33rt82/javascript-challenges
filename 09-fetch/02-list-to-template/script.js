/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async function () {
        try {
            const response = await fetch('../../_shared/api.json?heroes');
            if (response.ok) {
                const jsonheroesResponse = await response.json();
                console.log(jsonheroesResponse);
                const template = document.getElementById("tpl-hero");
                console.log(template);
                console.log(jsonheroesResponse.heroes.length);

                const target = document.querySelector("#target");
                console.log(target);
                    for (  let i = 0; i < jsonheroesResponse.heroes.length; i++) {
                        const hero = template.content.cloneNode(true);
                        console.log(hero);
                        hero.querySelector(".name").innerText = jsonheroesResponse.heroes[i].name;
                        hero.querySelector(".alter-ego").innerText = jsonheroesResponse.heroes[i].alterEgo;
                        hero.querySelector(".powers").innerText = jsonheroesResponse.heroes[i].abilities.join(' ,');

                        target.appendChild(hero);
                    }

            }


        }
        catch (error) {
            console.log(error);
        }
    })
})();
