/*
4️⃣ Find Maximum Difference

Write a function that finds the largest difference between any two numbers in an array.


[3,10,6] → 10 - 3 = 7
*/

function maxDiff(numsArr) {


    let finalValDifference = 0;
    let currentValDifference = 0;

    // original loop to be looped again for each arr item from within
    for (let i = 0; i < numsArr.length; i++) {

        console.log(`outer loop numsArr[i] => ${numsArr[i]}`); // just checks

        // inside loop for subtracting each item against it  
        for (let j = 0; j < numsArr.length; j++) {
            console.log(`inner loop numsArr[i] => ${numsArr[i]}`); // just checks
            console.log(`numsArr[j] => ${numsArr[j]}`); // just checks
            console.log(`numsArr[i] - numsArr[j] => ${numsArr[i] - numsArr[j]}`); // just checks

            // gets value difference
            currentValDifference = numsArr[i] - numsArr[j];

            // finds largest value difference
            if (currentValDifference > finalValDifference) {
                // only reassigns if newer value is larger
                finalValDifference = currentValDifference;
            }

        }
    }
    console.log(currentValDifference); // just checks

    // returns max diff. value
    return finalValDifference;

}
maxDiff([3, 10, 6]);
console.log(`final answer => ${maxDiff([3, 10, 6])}`);

// another test below
// maxDiff([20, 2, 18]);
// console.log(maxDiff([20, 2, 18]));