interface addFun{ //interface as a function
    (a:number,b:number):number;
}
let add:addFun; //add is a function of type addFun
add:(a:number,b:number)=>{
    return a+b;
}

interface Named{//Interface, it defines the syntax(structure) for objects to follow
    readonly name:string;
}

interface Greetable extends Named{//Interface that extends Named,which force a class that implements them Greetable follow both Named & Greetable structure
   
    age:number;
    greet(phrase:string):void;

}
class Person implements Greetable {//Person must have the same properties and methods that Greetable have
    name: string;
    age = 30;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  
  let user: Greetable;
  
  user = new Person('Max');
  //user.name='hello' //Error: Cannot assign to 'name' because it is a read-only property
  user.greet('Hi there - I am');
  console.log(user);