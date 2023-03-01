"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; //protected make the property not accessible outside the class,but accessible to children that extends it.
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //The super keyword is used to or invoke a Departments's constructor.
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting'); //The super keyword is used to or invoke a Departments's constructor.
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get LastReport() {
        if (this.lastReport) {
            return this, this.lastReport;
        }
        throw new Error("lastReport is undefined!");
    }
    set LastReport(text) {
        if (text) {
            this.addReport(text);
        }
        else
            throw new Error("Report text is Required!");
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee); //We can access employees array since its of type protected
    }
}
const accounting = new AccountingDepartment('d1', []);
accounting.addEmployee('Max'); //will not be added
accounting.addEmployee('Manu'); //will be added
accounting.addEmployee('John'); //will be added
accounting.printEmployees(); //['Manu', 'John']
accounting.addReport("Report 1"); //Add new Report
console.log(accounting.LastReport); //Report 1
accounting.LastReport = "Report 2";
console.log(accounting.LastReport); //Report 2
