"use strict";
function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let numbers = [];
    for (let i = startNumber; i <= endNumber; i++) {
        numbers.push(i);
        sum += i;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
