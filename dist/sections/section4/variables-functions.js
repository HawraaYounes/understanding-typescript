"use strict";
let num1 = 1;
num1 = 5;
function letDeclaration() {
    let num2 = 2;
    if (num2 > num1) {
        let num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        let num4 = 4;
        num1++;
    }
    console.log(num1);
    console.log(num2);
}
letDeclaration();
const num = 100;
const test = (msg) => {
    return `hello ${msg}`;
};
const defaultParams = (a = 1, b = 'Hello', c = 'World!') => {
    console.log(`${a}  ${b}  ${c}`);
};
defaultParams(2, 'Hawraa', 'Younes');
defaultParams(undefined, 'Hi');
//# sourceMappingURL=variables-functions.js.map