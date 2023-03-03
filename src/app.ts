//Video 105: A First Class Decorator
    function Logger(c:Function){//Teacher construcor as an argument
        console.log("Hello from Logger")
        console.log(c) 
    }

    @Logger //Point to the function Logger
    class Teacher{
        name='Max';
        constructor(){
            console.log("Person Constructor");
        }
    }
    const teacher=new Teacher;

//Video 106: Working with Decorator Factories