interface addFun{ //interface as a function
    (a:number,b:number):number;
}
let add:addFun; //add is a function of type addFun
add:(a:number,b:number)=>{
    return a+b;
}

interface Named{//Interface, it defines the syntax(structure) for objects to follow
    readonly name?:string;
    gender?:string; //optional property that might exists in classes that implements this interface, but doesn't have to.
}

interface Greetable extends Named{//Interface that extends Named,which force a class that implements them Greetable follow both Named & Greetable structure
   
    age:number;
    greet(phrase:string):void;

}
class Person implements Greetable {//Person must have the same properties and methods that Greetable have
    name?: string; //name is optional
    age = 30;
    constructor(n?: string) {//n is optional
        if(n){
            this.name = n;
        }
    }
    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }
        else console.log(phrase);
    }
  }
  
  let user: Greetable;
  
  user = new Person();
  //user.name='hello' //Error: Cannot assign to 'name' because it is a read-only property
  user.greet('Hi there');
  console.log(user);