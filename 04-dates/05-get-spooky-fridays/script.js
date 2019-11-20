/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    var getFridays = document.getElementById("run").addEventListener("click", event => {
        debugger;
            let year = document.getElementById("year").value;
            let friday13thMonths = [];
            //let yearDateValue = new Date().setFullYear(year);
            // console.log(year);

            //check what day of the week january 1 is and make sure it is a date object!!!
            const months = ['january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            months.forEach((month, index) => {
                  let  firstOfTheMonth = new Date(`${month} 1, ${year} 00:00:00`).getDay();
                    console.log(firstOfTheMonth);
                    if (firstOfTheMonth === 0)//if 13th of month is a friday, then the first of the month is a sunday

                    {
                        friday13thMonths.push(months[index]);
                    }
                }
            )
        var resultBox = document.createElement("div");
            if (friday13thMonths.length > 0){
                resultBox.innerText = friday13thMonths.toString();

            }
            else {
                resultBox.innerText= "You're so lucky, no friday the 13ths this entire year!"
            }
        document.body.appendChild(resultBox);

        }
    );

})();
