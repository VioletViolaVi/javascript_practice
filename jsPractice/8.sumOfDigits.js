/*
8️⃣ Sum of Digits (Bonus Twist)

You did the basic sum of digits; now do a sum of digits until a single digit remains.

Example:

123 → 1+2+3 = 6 → return 6
987 → 9+8+7 = 24 → 2+4 = 6 → return 6
*/

function sumOfDigits(longNum) {

    let total = 0;
    let newTotal = 0;

    for (let i = 0; i < String(longNum).length; i++) {
        const singleNum = Number(String(longNum)[i]);
        total += singleNum;
        console.log(total);
        console.log(`length: ${String(total).length}`);
    }

    if (String(total).length !== 1) {
        let currentTotalStr = String(total);
        console.log(`currentTotalStr: ${currentTotalStr}`);

        for (let i = 0; i < currentTotalStr.length; i++) {
            console.log(`Number(currentTotalStr[i]): ${Number(currentTotalStr[i])}`);
            newTotal += Number(currentTotalStr[i]);
            console.log(`newTotal: ${newTotal}`);
        }

        return newTotal;
    }

    return total;
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(987));