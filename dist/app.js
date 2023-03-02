"use strict";
function showType(args) {
    console.log(args);
}
showType({ id: 1, left: "test", right: "test" }); // Output: {id: 1, left: "test", right: "test"}
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments! Both arguments must be either numbers or strings.');
}
console.log(addNumbers('Hello ', 'World!')); //Hello World!
console.log(addNumbers(10, 15)); //25
//console.log(addNumbers('Hello ',25));//Error:Invalid arguments! Both arguments must be either numbers or strings.
//'instanceof' type guard
class Customer {
    creditAllowed() {
        return 'I am  a Customer.';
    }
}
class Supplier {
    inShortList() {
        return 'I am a supplier.';
    }
}
function signContract(partner) {
    let message;
    if (partner instanceof Customer) {
        return message = partner.creditAllowed();
    }
    if (partner instanceof Supplier) {
        return message = partner.inShortList();
    }
    throw new Error('Invalid argument! Argument should be Customer or Supplier');
}
const newPartner = new Supplier();
console.log(signContract(newPartner));
function printPaddingInformation(padding) {
    if ('left' in padding) {
        console.log('Padding to the Left: ' + padding.left);
    }
    if ('right' in padding) {
        console.log('Padding to the Right: ' + padding.right);
    }
}
printPaddingInformation({ id: 634, right: '70%' });
