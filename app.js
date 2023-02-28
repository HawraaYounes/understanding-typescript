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
