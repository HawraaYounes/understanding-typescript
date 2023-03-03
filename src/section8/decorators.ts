//Video 105: A First Class Decorator
    function ClassDecorator(c:Function){//Teacher construcor as an argument
        console.log("Hello from Logger");
    }

    @ClassDecorator //Point to the function Logger
    @FactoryDecorator('Decorator Factories') //Factory will be xecuted before Logger(bottom to top)
    @WithTemplate('<h1>My Person Object</h1>', 'decorator-div')
    class Teacher{
        name='Max';
        constructor(){
            console.log("Teacher Constructor");
        }
    }
    const teacher=new Teacher;

//Video 106: Working with Decorator Factories
    function FactoryDecorator(text:string){ //decorator factory that returns a decorator function
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

//Video 109: Diving into Property Decorators
    const PropertyDecorator = (target: any, memberName: string) => {
        console.log(memberName);//the name of the property:fullname
    };
    
    class Property {
        @PropertyDecorator //Property Decorator
        fullname: string = "Jon";
    }
//Video 110: Accessor & Parameter Decorators
    //Accessor Decorator
    const AccessorDecorator = () => {
        return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
            console.log(memberName); //The name of the member(accessor). //fullName
            console.log(propertyDescriptor); //The Property Descriptor for the memberName.
            console.log("Accessor Decorator")
        }
    }
    class Accessor {
        firstName: string = "Jon"
        lastName: string = "Doe"
    
        @AccessorDecorator()
        get fullName () {
        return `${this.firstName} ${this.lastName}`;
        }
    }
    //Parameter Decorator
    function ParameterDecorator(target: Object, propertyKey: string, parameterIndex: number) {
        console.log(propertyKey);//The name of the member.(functionthat have this parameter) :testMethod
        console.log(parameterIndex);//The ordinal index of the parameter in the function’s parameter list :1
      }
      class TestClass {
        testMethod(@ParameterDecorator param1: any) {}
      }

//Video 111: When do Decorators Execute?
    // Decorators are always executed when the class declaration is executed. Since most class declarations
    //  are often in the top-level scope of a module, that can mean that they run when the code is executed,
    //   but there's nothing stopping you from having a class declaration inside of another function, in which
    //    case the decorators would only run when that function was called.
