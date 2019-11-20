/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var currentDay = new Date().getUTCDate();

    document.getElementById("run").addEventListener("click", event => {
        var birthYear = parseInt(document.getElementById("dob-year").value);
        var birthMonth = parseInt(document.getElementById("dob-month").value);
        var birthDay = parseInt(document.getElementById("dob-day").value);

debugger;
        if (currentYear > birthYear) // at least one year old
        {
            if (currentMonth + 1 > birthMonth)// your birthmonth is in the past, so you're past your birthday this year ...
            {
                var age = currentYear - birthYear;
                var result = age;

            }
            else // your birthmonth still has to come or this month is your birthday
            {
                if (currentDay >= birthDay) // you're birthday is today or was some day this month.
                {
                    var age = currentYear - birthYear;
                    var result = age;
                }
                else // your birthday is coming this month ...
                {
                    var age = currentYear - 1 - birthYear;
                    var result = age;
                }
            }
        }
        else // person is less than one year old
        {
            if (currentMonth + 1 > birthMonth)// you are at least one month old ...
            {
                var age = currentMonth +1  - birthMonth;
                var result = `${age} months`;
            }

            else // you are are less than one month old
            {
                if (currentDay > birthDay) // you are at least one day old ...
                {
                    var age = currentDay - birthDay;
                    var result = `${age} days `;
                }
                else // your were born today ...
                {
                    var age = 0;
                    var result = `you are born today!`
                }
            }
        }

        const resultdiv = document.createElement('div');
        resultdiv.innerText = result;
        document.body.appendChild(resultdiv);

    })
})();
