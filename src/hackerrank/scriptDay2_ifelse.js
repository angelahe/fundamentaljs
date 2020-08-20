'use strict';

//
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

inputString = "11\n";
inputString = inputString.trim().split('\n').map(str => str.trim());
console.log("Expected output is: D");

getGrade(inputString);
console.log("Acutal output is: "+getGrade(inputString));

function readLine() {
    return inputString[currentLine++];
}

/*
If 26-30, then A.
If 21-25, then B.
If 12-20, then C.
If 11-15, then D.
If 6-10, then E.
If 0-5, then F.
 */
function getGrade(score) {
    let grade;
    // Write your code here
    if ((score > 0) && (score <= 5)) {
        grade = 'F';
    }
    else if ((score > 5) && (score <= 10)) {
        grade = 'E';
    }
    else if ((score > 10) && (score <= 15)) {
        grade = 'D';
    }
    else if ((score > 15) && (score <= 20)) {
        grade = 'C';
    }
    else if ((score > 20) && (score <= 25)) {
        grade = 'B';
    }
    else if ((score > 25) && (score <= 30)) {
        grade = 'A';
    }

    return grade;
}



