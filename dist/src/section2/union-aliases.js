"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Video 22: Union Types
function printStatusCode(code) {
    console.log(`My status cose is ${code}`);
}
printStatusCode(404); //Correct (code is of type number)
printStatusCode("404"); //Correct (code is of type string)
//printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)
//Video 23: Literal Types
function printText(s, alignment) {
    console.log(`'${s}' has alignment: ${alignment}`);
}
printText("Hello world!", "left"); //Correct
function combine(ID1, ID2, petName1, petName2) {
    console.log(`'${petName1}' has ID: ${ID1}`);
    console.log(`'${petName2}' has ID: ${ID2}`);
}
combine("#1902", 2706, "Dog", "Cat"); //Correct
//combine(1859,"A1275","Fish","Dog");//Error: 'Fish' cannot be assigned to petName1 of type 'pet'(only Dog OR Cat is allowed)
//combine(5602,false,"Cat","Cat");//Error: false(boolean) cannot be assigned to ID2 of type 'id'(only string OR number is allowed)
