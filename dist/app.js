"use strict";
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
        this.element.addEventListener('submit', this.handleSubmit.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //insert the copy of created template after begining of the div (between opening & closing tags)
    }
}
const prjInput = new ProjectInput(); //create an instance of the class ProjectInput
