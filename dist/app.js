"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Video 105: A First Class Decorator
function Logger(c) {
    console.log("Hello from Logger");
}
// @Logger //Point to the function Logger
// @Factory('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
let Teacher = class Teacher {
    constructor() {
        this.name = 'Max';
        console.log("Teacher Constructor");
    }
};
Teacher = __decorate([
    WithTemplate('<h1>My Person Object</h1>', 'decorator-div')
], Teacher);
const teacher = new Teacher;
//Video 106: Working with Decorator Factories
function Factory(text) {
    return function (constructor) {
        console.log(constructor);
        console.log(text);
    };
}
//Video 107: Building More Useful Decorators
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
//Video 109: Diving into Property Decorators
const printMemberName = (target, memberName) => {
    console.log(memberName); //name
};
class Property {
    constructor() {
        this.name = "Jon";
    }
}
__decorate([
    printMemberName //Property Decorator
], Property.prototype, "name", void 0);
