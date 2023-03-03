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
    console.log(c);
}
let Teacher = class Teacher {
    constructor() {
        this.name = 'Max';
        console.log("Person Constructor");
    }
};
Teacher = __decorate([
    Logger //Point to the function Logger
    ,
    Factory('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
], Teacher);
const teacher = new Teacher;
//Video 106: Working with Decorator Factories
function Factory(text) {
    return function (constructor) {
        console.log(constructor);
        console.log(text);
    };
}
