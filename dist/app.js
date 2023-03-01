"use strict";
class Department {
    constructor(n) {
        this.employees = []; //private make the property accessible in its class ONLY.
        this.name = n; //Assigning n to name property;
    }
    describe() {
        console.log("Department Name:" + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting"); //new is a keyword to create an instance of Department object using its constructor
accounting.describe(); //executes describe function for Accounting Object
accounting.addEmployee('Max'); //adding new Employee using addEmployee function in Department class
accounting.addEmployee('John');
//accounting.employees.push('New')//Error: employees is not accessible outside its class (private)
accounting.printEmployees(); //['Max', 'John']
