"use strict";
class Department {
    constructor(n) {
        this.name = n; //Assigning n to name property;
    }
    describe() {
        console.log("Department Name:" + this.name);
    }
}
const accounting = new Department("Accounting"); //new is a keyword to create an instance of Department object using its constructor
accounting.describe(); //executes describe function for Accounting Object
