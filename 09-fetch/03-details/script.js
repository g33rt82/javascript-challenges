/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
      const  input= document.getElementById("hero-id");

        const getHero = async (heroId) => {
            const queryString = `/${heroId}`;
            const apiPath = 'http://localhost:3000/heroes';
            const url =`${apiPath}${queryString}`;
            console.log(url);
            try{
                const response = await fetch(url);
                if (response.ok){
                    const jsonResponse = await response.json();
                    console.log(jsonResponse);
                    const template = document.getElementById("tpl-hero");
                    console.log(template);
                    const myHero = template.content.cloneNode(true);
                    console.log(myHero);
                    myHero.querySelector(".name").innerText = jsonResponse.name;
                    myHero.querySelector(".alter-ego").innerText = jsonResponse.alterEgo;
                    myHero.querySelector(".powers").innerText = jsonResponse.abilities.join(', ' );
                    document.getElementById("target").appendChild(myHero);
                }


            }
            catch(error){
                console.log(error);
            }
        }
        console.log(input.value);
       getHero(input.value)
    } )
})();
