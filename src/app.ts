interface Person{//Interface It defines the syntax(structure) for objects to follow
    name:string;
    age:number;

    greet(phrase:string):void;

}
let user:Person;
user={
    name:'John',
    age:25,
    greet(phrase:string){
        console.log(`phrase ${this.name}`)
    }
}