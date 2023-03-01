"use strict";
class Department {
    constructor(n) {
        this.name = n; //Assigning n to name property;
    }
}
const accounting = new Department("Accounting"); //new is a keyword to create an instance of Department object using its constructor
console.log(accounting); //Department {name: 'Accounting'}
