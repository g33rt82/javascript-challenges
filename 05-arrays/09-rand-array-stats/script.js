/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", event => {
        debugger;
             let values =[];
            for (i=0; i<10; i++){
                values.push(Math.floor(Math.random()*100));
                let position= `n-${i+1}`;
                document.getElementById(position).innerText = values[i];
            }
        const reducer = (total, value) => total + value;
      const sum =   document.getElementById("sum").innerText = values.reduce(reducer);
      console.log("sum");
        document.getElementById("average").innerText =  sum /10;

            const sortedValues = values.sort(function compare(a,b){return a -b;});
           // console.log(sortedValues);
           // console.log(sortedValues.shift());
           // console.log(sortedValues.pop());
            document.getElementById("min").innerText = sortedValues.shift();
            document.getElementById("max").innerText = sortedValues.pop();




    })

})();
