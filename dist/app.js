"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Autobind Decorator
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value; //save original method description
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
//class ProjrctInput
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true); //creates a copy of template and imports it to the current document.
        this.element = importedNode.firstElementChild; //returns form input from imported node
        this.element.id = 'user-input'; //Add id to the form to apply the styling to it
        this.titleInputElement = this.element.querySelector('#title'); //returns title input  
        this.descriptionInputElement = this.element.querySelector('#description'); //returns descriptio input
        this.peopleInputElement = this.element.querySelector('#people'); //returns people input
        this.configure();
        this.attach();
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.handleSubmit);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //insert the copy of created template after begining of the div (between opening & closing tags)
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "handleSubmit", null);
const prjInput = new ProjectInput(); //create an instance of the class ProjectInput
