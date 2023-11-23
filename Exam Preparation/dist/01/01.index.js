"use strict";
function solve(a, operator, b) {
    let result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    console.log(result.toFixed(2));
}
solve(5, "+", 10);
solve(25.5, "-", 3);
solve(9, "/", 2);
solve(7, "*", 5);
//# sourceMappingURL=01.index.js.map