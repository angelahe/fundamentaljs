'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

/*
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});
*/

inputString = "4\n";
inputString = inputString.trim().split('\n').map(str => str.trim());
/*expected output is 24*/
console.log("Expected output is 24");


function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    return 1;
}


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}

main();