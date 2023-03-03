//Video 105: A First Class Decorator
    function Logger(c:Function){//Teacher construcor as an argument
        console.log("Hello from Logger");
        console.log(c);
    }

    // @Logger //Point to the function Logger
    // @Factory('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
    @WithTemplate('<h1>My Person Object</h1>', 'decorator-div')
    class Teacher{
        name='Max';
        constructor(){
            console.log("Person Constructor");
        }
    }
    const teacher=new Teacher;

//Video 106: Working with Decorator Factories
    function Factory(text:string){ //decorator factory that returns a decorator function
        return function(constructor:Function){
            console.log(constructor);
            console.log(text);
        }
    }
//Video 107: Building More Useful Decorators
    function WithTemplate(template: string, hookId: string) {
        return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
        }
    }

    