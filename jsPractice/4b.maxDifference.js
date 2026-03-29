/*
4️⃣ Find Maximum Difference

Write a function that finds the largest difference between any two numbers in an array.

Example:

[3,10,6] → 10 - 3 = 7
*/
function valDiff(numsArr) {

    // for both largest and smallest numbers
    let maxNum = -Infinity;
    let minNum = Infinity;

    for (let i = 0; i < numsArr.length; i++) {

        // find largest num
        if (numsArr[i] > maxNum) {
            maxNum = numsArr[i];
        }

        // find smallest num
        if (numsArr[i] < minNum) {
            minNum = numsArr[i];
        }
    }

    // subtract numbers to get difference
    let maxDiff = maxNum - minNum;

    // return difference
    return maxDiff;
}

console.log(valDiff([3, 10, 6]));