"use strict";
var _a;
function showType(args) {
    console.log(args);
}
showType({ id: 1, left: "test", right: "test" });
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments! Both arguments must be either numbers or strings.');
}
console.log(addNumbers('Hello ', 'World!'));
console.log(addNumbers(10, 15));
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
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = 'Hi there!';
    console.log(userInputElement.value);
}
const salary1 = {
    baseSalary: 100000,
    yearlyBonus: 20000
};
const salary2 = {
    contractSalary: 110000
};
function totalSalary(salaryObject) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}
console.log(totalSalary(salary1));
console.log(totalSalary(salary2));
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Bella'
    }
};
const catName = (_a = adventurer.cat) === null || _a === void 0 ? void 0 : _a.name;
console.log(catName);
const foo = null !== null && null !== void 0 ? null : 'DEFAULT';
console.log(foo);
const number = 0 !== null && 0 !== void 0 ? 0 : 42;
console.log(number);
//# sourceMappingURL=advanced-types.js.map