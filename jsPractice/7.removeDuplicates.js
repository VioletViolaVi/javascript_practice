/*
7️⃣ Remove Duplicates

Write a function that takes an array and returns a new array with all duplicates removed.

Example:

[1,2,2,3] → [1,2,3]
*/

function removeDuplicates(numArr) {

    // stores unique values
    let container = [];
    
    // iterate through array
    for (let i = 0; i < numArr.length; i++) {
        
        // prevents repeated values in container array
        if ( !( container.includes(numArr[i]) ) ) {
            // puts values in above container array
            container.push(numArr[i]);            
        }        
    }

    return container
}
console.log(removeDuplicates([1,2,2,3]));
console.log(removeDuplicates([1,2,2,3,1,2,2,3,1,2,2,3,4]));
console.log(removeDuplicates([10,20,24,33,10,27,28,31,19,24,56,33,56]));
