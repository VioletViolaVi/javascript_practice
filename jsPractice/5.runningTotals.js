/*
5️⃣ Running Total

Write a function that takes an array and returns an array of running totals.

Example:
[1,2,3] → [1, 3, 6]  // 1, 1+2=3, 1+2+3=6
[5,1,4] → [5, 6, 10]  // 5, 5+1=6, 5+1+4=10
*/

function runningTotal(ogNumsArr) {

    // 'emptied' containers for totals and array of totals
    let sum = 0;
    let newArr = [];

    for (let i = 0; i < ogNumsArr.length; i++) {

        // get, retain and add previous values to each other
        sum += ogNumsArr[i];

        // put new added values to array
        newArr.push(sum);

        // console.log(sum); // checking      
    }
    // console.log(newArr); // checking

    // contains array of added running totals
    return newArr;
}
// runningTotal([5, 1, 4]); // checking
console.log(runningTotal([5, 1, 4]));
console.log(runningTotal([1, 2, 3]));