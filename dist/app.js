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
function moveAnimal(animal) {
    let speed;
    switch (animal.type) { //checking the type of the animal
        case 'bird':
            speed = animal.flyingSpeed; //we can access flyingSpeed, since in this case we're sure that the animal type is bird.
            break;
        case 'horse':
            speed = animal.runningSpeed; //we can access runningSpeed, since in this case we're sure that the animal type is horse.
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 }); //Moving at speed: 10
//Video 86: Type Casting
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = 'Hi there!';
    console.log(userInputElement.value);
}
//Video 87: Index Properties
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
console.log(totalSalary(salary1)); // 120000
console.log(totalSalary(salary2)); // 110000
