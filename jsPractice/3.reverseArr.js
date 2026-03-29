/*
3️⃣ Reverse an Array

Write a function that takes an array and returns a new array with elements in reverse order.

Example:
[1,2,3] → [3,2,1]
*/

function reverseArr(originalArr) {

    // stores arr reversed
    let flippedArr = [];

    // reverses arr
    for (let i = originalArr.length - 1; i >= 0; i--) {
        console.log(originalArr[i]);

        // puts nums in reverse arr
        flippedArr.push(originalArr[i]);
    }
    return flippedArr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));