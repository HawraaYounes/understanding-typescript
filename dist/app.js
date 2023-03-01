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
user.greet('Hi there - I am');
console.log(user);
