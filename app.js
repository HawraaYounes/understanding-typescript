"use strict";
exports.__esModule = true;
//Video 22: Union Types
function printStatusCode(code) {
    console.log("My status cose is ".concat(code));
}
printStatusCode(404); //Correct (code is of type number)
printStatusCode("404"); //Correct (code is of type string)
//printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)
