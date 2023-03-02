"use strict";
//Video 95: Creating a Generic Function
function displayData(a) {
    return a;
}
console.log(displayData("Hello World!")); //Hello World!
console.log(displayData(12345)); //12345
function getLength(a) {
    return a.length;
}
console.log(getLength([2, 3, 7, 1, 9])); //5
console.log(getLength("GUESS MY LENGTH!")); //16
//console.log(getLength(1235)); //Error: numbers don't have '.length' property
