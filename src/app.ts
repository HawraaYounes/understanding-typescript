class  Department{
    name:string;//Name is property for Department Object

    constructor(n:string){//constructur to call it later and create instance of Department Object
        this.name=n; //Assigning n to name property;
    }
}
const accounting=new Department("Accounting");//new is a keyword to create an instance of Department object using its constructor
console.log(accounting); //Department {name: 'Accounting'}