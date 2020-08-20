'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

inputString = "javascriptloops\n";
//inputString = inputString.trim().split('\n').map(str => str.trim());

console.log("Expected output is vowels on each line then consonants on each line");
console.log("input string is" + inputString);

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    //first print the vowels
//    console.log("Will now print vowels\n");
    for (let i=0; i<s.length; i++){
        //console.log("Curr char is"+ s.charAt(i));
        if ('aeiou'.includes(s.charAt(i))){
            console.log(s[i]);
        }
    }
//    console.log("Will now print consonants");
    //now print the consonants
    for (let i=0; i<s.length; i++){
        if (!'aeiou'.includes(s.charAt(i))){
                console.log(s[i]);
        }
    }

}

vowelsAndConsonants(inputString);