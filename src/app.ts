class  Department{
    name:string;//Name is property for Department Object

    constructor(n:string){//constructur to call it later and create instance of Department Object
        this.name=n; //Assigning n to name property;
    }
    describe(this:Department){ //describe is a constructor function that refer to an object of type Department only.
        console.log("Department Name:"+this.name);
    }
}
const accounting=new Department("Accounting");//new is a keyword to create an instance of Department object using its constructor
accounting.describe();//executes describe function for Accounting Object