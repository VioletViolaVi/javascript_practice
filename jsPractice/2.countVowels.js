/*
2️⃣ Count Vowels

Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it. Ignore capitalization.

Example:

"Hello World" → 3
*/

function vowelCounter(wordStr) {

    // makes string lowercase
    const lowerCaseStr = wordStr.toLowerCase();

    // for containing total num of vowels
    let totalNumOfVowels = 0;
    // iterate (1 by 1) through word string
    for (let i = 0; i < lowerCaseStr.length; i++) {

        // check if individual char is vowel
        if (lowerCaseStr[i] == "a" || lowerCaseStr[i] == "e" || lowerCaseStr[i] == "i" || lowerCaseStr[i] == "o" || lowerCaseStr[i] == "u") {
            totalNumOfVowels++;
        }
    }

    return totalNumOfVowels;
}

const greeting = "HEllo WOrld";
console.log(vowelCounter(greeting));

const person = "BOb";
console.log(vowelCounter(person));

const catchPhrase = "When you make a mistAke, give Up!";
console.log(vowelCounter(catchPhrase));
