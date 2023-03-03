"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Video 105: A First Class Decorator
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
    ClassDecorator //Point to the function Logger
    ,
    FactoryDecorator('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
    ,
    WithTemplate('<h1>My Person Object</h1>', 'decorator-div')
], Teacher);
const teacher = new Teacher;
//Video 106: Working with Decorator Factories
function FactoryDecorator(text) {
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
const PropertyDecorator = (target, memberName) => {
    console.log(memberName); //the name of the property:fullname
};
class Property {
    constructor() {
        this.fullname = "Jon";
    }
}
__decorate([
    PropertyDecorator //Property Decorator
], Property.prototype, "fullname", void 0);
//Video 110: Accessor & Parameter Decorators
//Accessor Decorator
const AccessorDecorator = () => {
    return (target, memberName, propertyDescriptor) => {
        console.log(memberName); //The name of the member(accessor). //fullName
        console.log(propertyDescriptor); //The Property Descriptor for the memberName.
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
//Parameter Decorator
function ParameterDecorator(target, propertyKey, parameterIndex) {
    console.log(propertyKey); //The name of the member.(functionthat have this parameter) :testMethod
    console.log(parameterIndex); //The ordinal index of the parameter in the function’s parameter list :1
}
class TestClass {
    testMethod(param1) { }
}
__decorate([
    __param(0, ParameterDecorator)
], TestClass.prototype, "testMethod", null);
