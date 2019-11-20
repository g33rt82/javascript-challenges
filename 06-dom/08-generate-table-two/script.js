/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    const table = document.createElement("table");
    for (i= 1; i < 11; i++){
        const row = document.createElement("tr");
        for (j =1; j < 11; j++){
            const col = document.createElement("td");
            const result = i *j;
            col.innerText = `${i.toString()} * ${j.toString()} = ${result}`
            row.appendChild(col)
        }
        table.appendChild(row);
    }

    document.getElementById("target").appendChild(table);
})();
