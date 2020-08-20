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

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    /* instructions were to use split reverse and join functions
    let reverseStringWorking = "";
    for(let i=s.length; i>=0; i--) {
        reverseStringWorking.concat(s.charAt(i));
    }*/
    let reversedString = s;

    try {
        let interrimObject = s.split("");
        let reversed = interrimObject.reverse();
        reversedString = reversed.join('');
    }
    catch (e){
        console.log(e.message);
    }
    finally {
        console.log(reversedString);
    }

}

inputString = "1234";
reverseString(inputString);
inputString = Number(1234);
reverseString(inputString);


function main() {
    const s = eval(readLine());

    reverseString(s);
}