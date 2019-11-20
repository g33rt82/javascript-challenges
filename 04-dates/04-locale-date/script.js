/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
debugger;
    // your code here
const resultField =  document.getElementById("target");
const now= new Date();
     const weekDayvalue = new Date().getDay();
     const monthValue = new Date().getMonth();
     function getDayofWeek(){
    switch (weekDayvalue) {
        case 0:
           return "Sunday";
        case 1:
            return"Monday";
        case 2:
            return"Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

function getMonthName(){
         switch(monthValue) {
             case 0 : return 'Januari';
             case 1 : return 'February';
             case 2 : return 'March';
             case 3 : return 'April';
             case 4 : return 'May';
             case 5 : return 'June';
             case 6 : return 'July';
             case 7 : return 'August';
             case 8 : return 'September';
             case 9 : return 'October';
             case 10 : return 'November';
             case 11: return 'December';
         }
}

resultField.innerText = `${getDayofWeek()}  ${now.getDate()}  ${getMonthName()}  ${now.getFullYear()}, ${now.getHours()}h${now.getMinutes()}`
})();
