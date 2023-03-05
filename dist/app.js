"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true); //creates a copy of form template and imports it to the current document. 
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //insert the copy of created template after begining of the div (between opening & closing tags)
    }
}
const prjInput = new ProjectInput(); //create an instance of the class ProjectInput
