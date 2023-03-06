"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printStatusCode(code) {
    console.log(`My status cose is ${code}`);
}
printStatusCode(404);
printStatusCode("404");
function printText(s, alignment) {
    console.log(`'${s}' has alignment: ${alignment}`);
}
printText("Hello world!", "left");
function combine(ID1, ID2, petName1, petName2) {
    console.log(`'${petName1}' has ID: ${ID1}`);
    console.log(`'${petName2}' has ID: ${ID2}`);
}
combine("#1902", 2706, "Dog", "Cat");
//# sourceMappingURL=union-aliases.js.map