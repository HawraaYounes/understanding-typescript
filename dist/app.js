"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; //private make the property accessible in its class ONLY.
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("#D1", "Accounting"); //new is a keyword to create an instance of Department object using its constructor
accounting.describe(); //executes describe function for Accounting Object
accounting.addEmployee('Max'); //adding new Employee using addEmployee function in Department class
accounting.addEmployee('John');
//accounting.employees.push('New')//Error: employees is not accessible outside its class (private)
accounting.printEmployees(); //['Max', 'John']
