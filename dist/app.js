"use strict";
let add; //add is a function of type addFun
add: (a, b) => {
    return a + b;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else
            console.log(phrase);
    }
}
let user;
user = new Person();
//user.name='hello' //Error: Cannot assign to 'name' because it is a read-only property
user.greet('Hi there');
console.log(user);
