/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        window.lib.getPosts(myCallBackFunction);
    });


    function myCallBackFunction(error, articleArray) {

        if (articleArray) {
            console.log(articleArray);

            articleArray.forEach(function(article) {
                article.comments = [];
                mySecondCallBackFunction(article);
            });

        }

        else {
            console.log(error);
        }

    }

    function mySecondCallBackFunction(article) {

      //  console.log(article.id);
      //  console.log(window.lib.getComments(article.id, myThirdCallbackFunction))
      //  console.log("+++++++");
        //console.log(article.id);
      //  console.log(window.lib.getComments(article.id, myThirdCallbackFunction));
       // console.log("++++++++");
        article.comments =  window.lib.getComments(article.id, myThirdCallbackFunction);

    }

    function myThirdCallbackFunction(error, commentsTable) {
     //   console.log ("--------------------------------------");
       // console.log(commentsTable);
        //console.log("----------------------------------------");
        if (error) {
            console.log(error);
        }

        else {

           return commentsTable;
        }
    }
})();
