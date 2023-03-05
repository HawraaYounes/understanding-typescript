class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
  
    constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  
      const importedNode = document.importNode(this.templateElement.content,true);//creates a copy of template and imports it to the current document.
      this.element = importedNode.firstElementChild as HTMLFormElement;//returns form input from imported node
      this.element.id='user-input';//Add id to the form to apply the styling to it

      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;//returns title input  
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;//returns descriptio input
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;//returns people input
  
      this.configure();
      this.attach();
    }
    private handleSubmit(e:Event){
        e.preventDefault();
        console.log(this.titleInputElement.value)
    }
    private configure(){
        this.element.addEventListener('submit',this.handleSubmit.bind(this));
    }
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);//insert the copy of created template after begining of the div (between opening & closing tags)
    }
  }
  
  const prjInput = new ProjectInput(); //create an instance of the class ProjectInput

  
  