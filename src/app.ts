class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
  
    constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  
      const importedNode = document.importNode(this.templateElement.content,true);//creates a copy of form template and imports it to the current document. 
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.attach();
    }
  
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);//insert the copy of created template after begining of the div (between opening & closing tags)
    }
  }
  
  const prjInput = new ProjectInput(); //create an instance of the class ProjectInput

  
  