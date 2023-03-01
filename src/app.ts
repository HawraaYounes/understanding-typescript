class  Department{
    name:string;//Name is property for Department Object
    private employees:string[]=[];//private make the property accessible in its class ONLY.
    
    constructor(n:string){//constructur to call it later and create instance of Department Object
        this.name=n; //Assigning n to name property;
    }
    describe(this:Department){ //describe is a constructor function that refer to an object of type Department ONLY.
        console.log("Department Name:"+this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployees(){
        console.log(this.employees);
    }
}
const accounting=new Department("Accounting");//new is a keyword to create an instance of Department object using its constructor
accounting.describe();//executes describe function for Accounting Object
accounting.addEmployee('Max');//adding new Employee using addEmployee function in Department class
accounting.addEmployee('John');
//accounting.employees.push('New')//Error: employees is not accessible outside its class (private)
accounting.printEmployees(); //['Max', 'John']