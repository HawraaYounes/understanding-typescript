class  Department{

    private employees:string[]=[];//private make the property accessible in its class ONLY.
    
    constructor(private id:string,private name:string){//constructur to call it later and create instance of Department Object(shorthand method)
       
    }
    describe(this:Department){ //describe is a constructor function that refer to an object of type Department ONLY.
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployees(){
        console.log(this.employees);
    }
}
const accounting=new Department("#D1","Accounting");//new is a keyword to create an instance of Department object using its constructor
accounting.describe();//executes describe function for Accounting Object
accounting.addEmployee('Max');//adding new Employee using addEmployee function in Department class
accounting.addEmployee('John');
//accounting.employees.push('New')//Error: employees is not accessible outside its class (private)
accounting.printEmployees(); //['Max', 'John']