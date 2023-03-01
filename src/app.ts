    class  Department{

        private employees:string[]=[];//private make the property accessible in its class ONLY.
        
        constructor(private readonly id:string,public name:string){//constructur to call it later and create instance of Department Object(shorthand method)
        
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

    class ITDepartment extends Department {//ITDepartment class instance of Department,has all its methods and properties & have additional ones.
        admins: string[];
        constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
        }
    }
  
  class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it = new ITDepartment('d1', ['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployees();
  
  console.log(it);
  
  