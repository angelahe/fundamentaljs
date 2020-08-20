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

inputString = "adfgt\n";
inputString = inputString.trim().split('\n').map(str => str.trim());

console.log("Expected output is A");



function readLine() {
    return inputString[currentLine++];
}

/*SEE solution below is better with char functions
function getLetter(s) {

    let letter;
    // Write your code here


    let testChar = s.charAt(0);
    console.log("Char is "+testChar);

    switch (s.charAt(0)) {
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
            letter = "A";
            break;
        case "b": case "c": case "d": case "f": case "g":
            letter = "B";
            break;
        case "h": case "j": case "k": case "l": case "m":
            letter = "C";
            break;
        case "n": case "p": case "q": case "r": case "s": case "t": case "v": case "w": case "x": case "y": case "z":
            letter = "D";
            break;
        default:
            letter = "";
    }
*/

  //another soiution

    function getLetter(s) {
        let letter;
        // Write your code here
        switch (true) {
            case 'aeiou'.includes(s[0]):
                console.log("Has a vowel");
                letter = 'A';
                break;
            case 'bcdfg'.includes(s[0]):
                letter = 'B';
                break;
            case 'hjklm'.includes(s[0]):
                letter = 'C';
                break;
            case 'npqrstvwxyz'.includes(s[0]):
                letter = 'D';
                break;
        }
        return letter;

    };

    console.log(getLetter(inputString));