"use strict";
exports.__esModule = true;
//Video 22: Union Types
function printStatusCode(code) {
    console.log("My status cose is ".concat(code));
}
printStatusCode(404); //Correct (code is of type number)
printStatusCode("404"); //Correct (code is of type string)
//printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)
//Video 23: Literal Types
function printText(s, alignment) {
    console.log("'".concat(s, "' has alignment: ").concat(alignment));
}
printText("Hello world!", "left"); //Correct
//printText("Hello world!", "Right"); //Error: values are CASE SENSITIVE ()
//printText("Hello World!", "center"); //Error:Argument of type '"center"' is not assignable to parameter of type "left" | "right".
