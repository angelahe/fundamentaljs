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

inputString = "5\n2 3 6 6 5\n";
inputString = inputString.trim().split('\n').map(str => str.trim());

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let secondLargestNum = 0;
    let largestNum = 0;
    console.log(nums.Copy);
    for (let i = 0; i < nums.length; i++){
       // console.log("Current number is "+nums[i])
        if (largestNum < nums[i]) {
            secondLargestNum = largestNum;
            largestNum = nums[i];
        }
        else if ((nums[i]< largestNum) && (secondLargestNum < nums[i])){
            secondLargestNum = nums[i];
        }
       // console.log("Largest is "+largestNum + " and 2nd largest is "+secondLargestNum );
    }

    return secondLargestNum;
}

console.log(getSecondLargest(inputString[1]));


