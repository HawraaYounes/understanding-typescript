"use strict";
exports.__esModule = true;
//Video 26: Functions Return types & "void"
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
//Video 27: Functions as Types
function add(n1, n2) {
    return n1 + n2;
}
function printName(n) {
    console.log(n);
}
var typedFunction; //function of 2 parameters(numbers) and its return type is also number.
typedFunction = add; //Correct 
//typedFunction=printName //Error (since printName has only one string parameter & it is a void function)
//Video 28: Function Types & Callbacks
function parent(a, b, callback) {
    var res = a + b;
    callback(res);
    return res;
}
function callback(a) {
    console.log(a);
}
parent(20, 5, callback);
//Video 29: The "unknown" type
var userInput;
var userName;
userInput = 'John'; //Correct 
//userName=userInput; //Error: 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string' && userInput != null) { //Check the type of userInput before assigning it to another variable.
    userName = userInput; //Correct
}
