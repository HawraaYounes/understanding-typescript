"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var App;
(function (App) {
    class Component {
        constructor(templateId, hostElementId, insertAtStart, newElementId) {
            this.templateElement = document.getElementById(templateId);
            this.hostElement = document.getElementById(hostElementId);
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart);
        }
        attach(insertAtBeginning) {
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
        }
    }
    App.Component = Component;
})(App || (App = {}));
var App;
(function (App) {
    function autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
    App.autobind = autobind;
})(App || (App = {}));
var App;
(function (App) {
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid =
                isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    App.validate = validate;
})(App || (App = {}));
var App;
(function (App) {
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, numOfPeople) {
            const newProject = new App.Project(Math.random().toString(), title, description, numOfPeople, App.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(projectId, newStatus) {
            const project = this.projects.find(prj => prj.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListeners();
            }
        }
        updateListeners() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    App.ProjectState = ProjectState;
    App.projectState = ProjectState.getInstance();
})(App || (App = {}));
var App;
(function (App) {
    class ProjectInput extends App.Component {
        constructor() {
            super('project-input', 'app', true, 'user-input');
            this.titleInputElement = this.element.querySelector('#title');
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
        renderContent() { }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };
            const peopleValidatable = {
                value: +enteredPeople,
                required: true,
                min: 1,
                max: 5
            };
            if (!App.validate(titleValidatable) ||
                !App.validate(descriptionValidatable) ||
                !App.validate(peopleValidatable)) {
                alert('Invalid input, please try again!');
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
        clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                App.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
    }
    __decorate([
        App.autobind
    ], ProjectInput.prototype, "submitHandler", null);
    App.ProjectInput = ProjectInput;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    App.Project = Project;
})(App || (App = {}));
var App;
(function (App) {
    class ProjectList extends App.Component {
        constructor(type) {
            super('project-list', 'app', false, `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dropHandler(event) {
            const prjId = event.dataTransfer.getData('text/plain');
            App.projectState.moveProject(prjId, this.type === 'active' ? App.ProjectStatus.Active : App.ProjectStatus.Finished);
        }
        dragLeaveHandler(_) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            App.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === App.ProjectStatus.Active;
                    }
                    return prj.status === App.ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                this.type.toUpperCase() + ' PROJECTS';
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = '';
            for (const prjItem of this.assignedProjects) {
                new App.ProjectItem(this.element.querySelector('ul').id, prjItem);
            }
        }
    }
    __decorate([
        App.autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        App.autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        App.autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    App.ProjectList = ProjectList;
})(App || (App = {}));
var App;
(function (App) {
    new App.ProjectInput();
    new App.ProjectList('active');
    new App.ProjectList('finished');
    console.log("hiiii");
})(App || (App = {}));
var App;
(function (App) {
    class ProjectItem extends App.Component {
        get persons() {
            if (this.project.people === 1) {
                return '1 person';
            }
            else {
                return `${this.project.people} persons`;
            }
        }
        constructor(hostId, project) {
            super('single-project', hostId, false, project.id);
            this.project = project;
            this.configure();
            this.renderContent();
        }
        dragStartHandler(event) {
            event.dataTransfer.setData('text/plain', this.project.id);
            event.dataTransfer.effectAllowed = 'move';
        }
        dragEndHandler(_) {
            console.log('DragEnd');
        }
        configure() {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHandler);
        }
        renderContent() {
            this.element.querySelector('h2').textContent = this.project.title;
            this.element.querySelector('h3').textContent =
                this.persons + ' assigned';
            this.element.querySelector('p').textContent = this.project.description;
        }
    }
    __decorate([
        App.autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    App.ProjectItem = ProjectItem;
})(App || (App = {}));
define("section2/basics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const car1 = {
        name: "Toyota",
        mileage: 300
    };
    const car2 = {
        name: "Toyota",
    };
    const names = ["John"];
    let activities = [];
    let unsafeTuple;
    unsafeTuple = [200, false, 'Hello'];
    unsafeTuple.push('World');
    let safeTuple;
    safeTuple = [200, false, 'Hello'];
    var CardinalDirections1;
    (function (CardinalDirections1) {
        CardinalDirections1[CardinalDirections1["North"] = 0] = "North";
        CardinalDirections1[CardinalDirections1["East"] = 1] = "East";
        CardinalDirections1[CardinalDirections1["South"] = 2] = "South";
        CardinalDirections1[CardinalDirections1["West"] = 3] = "West";
    })(CardinalDirections1 || (CardinalDirections1 = {}));
    var CardinalDirections2;
    (function (CardinalDirections2) {
        CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
        CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
        CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
        CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
    })(CardinalDirections2 || (CardinalDirections2 = {}));
    var StatusCodes;
    (function (StatusCodes) {
        StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
        StatusCodes[StatusCodes["Success"] = 200] = "Success";
        StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    })(StatusCodes || (StatusCodes = {}));
    var RoleEnum;
    (function (RoleEnum) {
        RoleEnum["Admin"] = "ADMIN";
        RoleEnum["User"] = "USER";
    })(RoleEnum || (RoleEnum = {}));
});
define("section2/functions-never-unknown", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getTime() {
        return new Date().getTime();
    }
    function printHello() {
        console.log('Hello!');
    }
    function add(n1, n2) {
        return n1 + n2;
    }
    function printName(n) {
        console.log(n);
    }
    let typedFunction;
    typedFunction = add;
    function parent(a, b, callback) {
        let res = a + b;
        callback(res);
        return res;
    }
    function callback(a) {
        console.log(a);
    }
    parent(20, 5, callback);
    let userInput;
    let userName;
    userInput = 'John';
    if (typeof userInput === 'string' && userInput != null) {
        userName = userInput;
    }
    function error(message, errorCode) {
        throw { message: message, errorCode: errorCode };
    }
    function fail() {
        return error("Page Not Found", 404);
    }
    fail();
});
define("section2/union-aliases", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function printStatusCode(code) {
        console.log(`My status cose is ${code}`);
    }
    printStatusCode(404);
    printStatusCode("404");
    function printText(s, alignment) {
        console.log(`'${s}' has alignment: ${alignment}`);
    }
    printText("Hello world!", "left");
    function combine(ID1, ID2, petName1, petName2) {
        console.log(`'${petName1}' has ID: ${ID1}`);
        console.log(`'${petName2}' has ID: ${ID2}`);
    }
    combine("#1902", 2706, "Dog", "Cat");
});
define("section3/running-project", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("section3/tsc-configurations", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
const hobbies = ['Sports', 'Swiming'];
const activities = ['Hiking'];
activities.push(...hobbies);
console.log(activities);
function getAverage(...args) {
    const avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
}
console.log(`Average of the given numbers is: ${getAverage(10, 20, 30, 40, 50)}`);
const [x, , y, ...remainingValues] = [10, 20, 30, 40, 50];
console.log(x);
console.log(y);
console.log(remainingValues);
const _a = { a: 10, b: 20, c: 30, d: 40 }, { a, b } = _a, restof = __rest(_a, ["a", "b"]);
console.log(a);
console.log(b);
console.log(restof);
let obj = {
    firstName: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
};
let { firstName } = obj;
console.log(firstName);
let { add: { country: abcd } } = obj;
console.log(abcd);
let { add: { state: { code: cd } } } = obj;
console.log(cd);
let { add: { state: { article: { topic: ef } } } } = obj;
console.log(ef);
let num1 = 1;
num1 = 5;
function letDeclaration() {
    let num2 = 2;
    if (num2 > num1) {
        let num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        let num4 = 4;
        num1++;
    }
    console.log(num1);
    console.log(num2);
}
letDeclaration();
const num = 100;
const test = (msg) => {
    return `hello ${msg}`;
};
const defaultParams = (a = 1, b = 'Hello', c = 'World!') => {
    console.log(`${a}  ${b}  ${c}`);
};
defaultParams(2, 'Hawraa', 'Younes');
defaultParams(undefined, 'Hi');
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
var _aa;
function showType(args) {
    console.log(args);
}
showType({ id: 1, left: "test", right: "test" });
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments! Both arguments must be either numbers or strings.');
}
console.log(addNumbers('Hello ', 'World!'));
console.log(addNumbers(10, 15));
class Customer {
    creditAllowed() {
        return 'I am  a Customer.';
    }
}
class Supplier {
    inShortList() {
        return 'I am a supplier.';
    }
}
function signContract(partner) {
    let message;
    if (partner instanceof Customer) {
        return message = partner.creditAllowed();
    }
    if (partner instanceof Supplier) {
        return message = partner.inShortList();
    }
    throw new Error('Invalid argument! Argument should be Customer or Supplier');
}
const newPartner = new Supplier();
console.log(signContract(newPartner));
function printPaddingInformation(padding) {
    if ('left' in padding) {
        console.log('Padding to the Left: ' + padding.left);
    }
    if ('right' in padding) {
        console.log('Padding to the Right: ' + padding.right);
    }
}
printPaddingInformation({ id: 634, right: '70%' });
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = 'Hi there!';
    console.log(userInputElement.value);
}
const salary1 = {
    baseSalary: 100000,
    yearlyBonus: 20000
};
const salary2 = {
    contractSalary: 110000
};
function totalSalary(salaryObject) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}
console.log(totalSalary(salary1));
console.log(totalSalary(salary2));
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Bella'
    }
};
const catName = (_a = adventurer.cat) === null || _a === void 0 ? void 0 : _a.name;
console.log(catName);
const foo = null !== null && null !== void 0 ? null : 'DEFAULT';
console.log(foo);
const number = 0 !== null && 0 !== void 0 ? 0 : 42;
console.log(number);
function displayData(a) {
    return a;
}
console.log(displayData("Hello World!"));
console.log(displayData(12345));
function getLength(a) {
    return a.length;
}
console.log(getLength([2, 3, 7, 1, 9]));
console.log(getLength("GUESS MY LENGTH!"));
function getProperty(obj, key) {
    return obj[key];
}
let ob = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(ob, "a"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function ClassDecorator(c) {
    console.log("Hello from Logger");
}
let Teacher = class Teacher {
    constructor() {
        this.name = 'Max';
        console.log("Teacher Constructor");
    }
};
Teacher = __decorate([
    ClassDecorator,
    FactoryDecorator('Decorator Factories'),
    WithTemplate('<h1>My Person Object</h1>', 'decorator-div')
], Teacher);
const teacher = new Teacher;
function FactoryDecorator(text) {
    return function (constructor) {
        console.log(constructor);
        console.log(text);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
const PropertyDecorator = (target, memberName) => {
    console.log(memberName);
};
class Property {
    constructor() {
        this.fullname = "Jon";
    }
}
__decorate([
    PropertyDecorator
], Property.prototype, "fullname", void 0);
const AccessorDecorator = () => {
    return (target, memberName, propertyDescriptor) => {
        console.log(memberName);
        console.log(propertyDescriptor);
        console.log("Accessor Decorator");
    };
};
class Accessor {
    constructor() {
        this.firstName = "Jon";
        this.lastName = "Doe";
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    AccessorDecorator()
], Accessor.prototype, "fullName", null);
function ParameterDecorator(target, propertyKey, parameterIndex) {
    console.log(propertyKey);
    console.log(parameterIndex);
}
class TestClass {
    testMethod(param1) { }
}
__decorate([
    __param(0, ParameterDecorator)
], TestClass.prototype, "testMethod", null);
//# sourceMappingURL=bundle.js.map