"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person('Max');
//user.name='hello' //Error: Cannot assign to 'name' because it is a read-only property
user.greet('Hi there - I am');
console.log(user);
