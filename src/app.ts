
//Autobind Decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;//save original method description
    const adjDescriptor: PropertyDescriptor = {
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
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
    
        if (
          enteredTitle.trim().length === 0 ||
          enteredDescription.trim().length === 0 ||
          enteredPeople.trim().length === 0
        ) {
          alert('Invalid input, please try again!');
          return;
        } else {
          return [enteredTitle, enteredDescription, +enteredPeople];
        }
      }
    
      private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
      }
    @autobind
    private handleSubmit(e:Event){
        e.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
          const [title, desc, people] = userInput;
          console.log(title, desc, people);
          this.clearInputs();
        }
    
    }

    private configure(){
        this.element.addEventListener('submit',this.handleSubmit);
    }
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);//insert the copy of created template after begining of the div (between opening & closing tags)
    }
  }
  
  const prjInput = new ProjectInput(); //create an instance of the class ProjectInput

  
  