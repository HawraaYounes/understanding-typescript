//Video 105: A First Class Decorator
    function Logger(c:Function){//Teacher construcor as an argument
        console.log("Hello from Logger");
        console.log(c);
    }

    @Logger //Point to the function Logger
    @Factory('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
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