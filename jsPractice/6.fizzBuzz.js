/*
6️⃣ Simple FizzBuzz Variant

Write a function that prints numbers from 1 to N.

If divisible by 3, print "Fizz"
If divisible by 5, print "Buzz"
If divisible by both, print "FizzBuzz"
Otherwise, print the number

Example:

N = 5 → 1,2,Fizz,4,Buzz
*/

function fizzBuzz(N_number) {
    // to continue for duration of 'N' number
    for (let i = 0; i < N_number + 1; i++) {

        // when divisible by both, one, the other or neither
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(5);
console.log("------------------------\n");
fizzBuzz(15);
console.log("------------------------\n");
fizzBuzz(33);
console.log("------------------------\n");
fizzBuzz(0);
