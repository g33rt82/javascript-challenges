/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let table =  document.createElement("table");
     for (i=1; i< 11; i++){
        const row = document.createElement("tr")
        table.appendChild(row);
       const col = document.createElement("td");
        row.appendChild(col);
        row.style.backgroundColor = "red";
        row.style.height = "50px";
        row.style.border = "4px dotted blue";
        document.getElementById("target").appendChild(table);
    }

})();
