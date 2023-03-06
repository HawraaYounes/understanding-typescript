"use strict";
let add;
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
user.greet('Hi there');
console.log(user);
//# sourceMappingURL=interfaces.js.map