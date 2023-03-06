"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function add(n1, n2) {
    return n1 + n2;
}
function printName(n) {
    console.log(n);
}
let typedFunction;
typedFunction = add;
function parent(a, b, callback) {
    let res = a + b;
    callback(res);
    return res;
}
function callback(a) {
    console.log(a);
}
parent(20, 5, callback);
let userInput;
let userName;
userInput = 'John';
if (typeof userInput === 'string' && userInput != null) {
    userName = userInput;
}
function error(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
function fail() {
    return error("Page Not Found", 404);
}
fail();
//# sourceMappingURL=functions-never-unknown.js.map