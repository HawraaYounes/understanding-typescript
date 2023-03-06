"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    static staticFunction(name) {
        return name;
    }
    printEmployees() {
        console.log(this.employees);
    }
}
Department.year = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
        console.log("Employee added by IT department");
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
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
        this.employees.push(employee);
        console.log("Employee added by Accounting department");
    }
}
console.log(Department.year, Department.staticFunction);
const accounting = new AccountingDepartment('d1', []);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.addEmployee('John');
accounting.printEmployees();
accounting.addReport("Report 1");
console.log(accounting.LastReport);
accounting.LastReport = "Report 2";
console.log(accounting.LastReport);
//# sourceMappingURL=classes.js.map