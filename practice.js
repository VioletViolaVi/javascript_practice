/*
1️⃣ Sum of Even Numbers

Write a function that takes an array of integers and returns the sum of all even numbers.

Example:

[1,2,3,4,5] → 2 + 4 = 6
*/

function arrEvenSum(numArr) {

    // holds sum of all even nums
    let totalEvenNum = 0;

    // iterate through number arr
    for (let i = 0; i < numArr.length; i++) {

        const singleNum = numArr[i];
        console.log(`singleNum = ${singleNum}`);

        if (singleNum % 2 == 0) {
            console.log(`evenSingleNum = ${singleNum}`);
            totalEvenNum += singleNum;
        }
    }
    console.log(`totalEvenNum = ${totalEvenNum}`);

    return totalEvenNum;
};

arrEvenSum([1, 2, 3, 4, 5, 12]); // should be 18
arrEvenSum([1, 3, 5]); // should be 0
arrEvenSum([10, 15, 20, 25]); // should be 30
console.log(`arrEvenSum(numArr) = ${arrEvenSum([1, 3, 5])}`); // for seeing returned value
