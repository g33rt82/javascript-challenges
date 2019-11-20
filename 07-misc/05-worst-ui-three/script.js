/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
 //You will have time to focus on it later.

(function () {

  //       your code here
        let partOne = document.getElementById("part-one");
        let partTwo = document.getElementById("part-two");

        const try1 = parseInt(partTwo.value) + 1;
        console.log(try1);
        console.log(typeof parseInt(partTwo.value));

        console.log(partOne.value[0]);
        console.log(partOne.value[1]);
        console.log(partOne.value[2]);
        console.log(typeof partOne.value[1]);



        console.log(partTwo.value[0]);
        console.log(partTwo.value[1]);
        console.log(typeof partOne.value[1]);


        for (i = 0; i < 2; i++) {
        //    console.log(partTwo.innerText[i]);
            for (j = 0; j < 10; j++) {
                partTwo.innerText[i] = partTwo.value[i];
         //     console.log(`value of j is ${j}`);
                partTwo.value[i] =  parseInt(partTwo.value[i]) + j;
                if (j === 9) {
                    j = 0;
                }

            }
            //    console.log(`value of i is ${partTwo.value[i]}`);
        }
    }
)();
