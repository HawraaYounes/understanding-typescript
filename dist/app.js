"use strict";
let user;
user = {
    name: 'John',
    age: 25,
    greet(phrase) {
        console.log(`phrase ${this.name}`);
    }
};
