interface Greetable{//Interface It defines the syntax(structure) for objects to follow
    name:string;
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
  user.greet('Hi there - I am');
  console.log(user);