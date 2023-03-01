    class  Department{
        static year=2023;
        protected employees:string[]=[];//protected make the property not accessible outside the class,but accessible to children that extends it.
        
        constructor(private readonly id:string,public name:string){//constructur to call it later and create instance of Department Object(shorthand method)
        
        }
        describe(this:Department){ //describe is a constructor function that refer to an object of type Department ONLY.
            console.log(`Department ${this.id}: ${this.name}`);
        }
        static staticFunction(name:string){
            return name;
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
        super(id, 'IT');//The super keyword is used to or invoke a Departments's constructor.
        this.admins = admins;
        }
    }
  
  class AccountingDepartment extends Department {
    private lastReport:string;
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');//The super keyword is used to or invoke a Departments's constructor.
      this.lastReport=reports[0];
    }
    get LastReport(){//getter to get lastReport property value
        if(this.lastReport){
            return this,this.lastReport;
        }
        throw new Error("lastReport is undefined!");
    }
    set LastReport(text:string){
        if(text){
            this.addReport(text);
        }
        else throw new Error("Report text is Required!");
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport=text;
    }
    addEmployee(employee:string){//override addEmployee method present in Department class
        if(employee==='Max'){
            return;
        }
        this.employees.push(employee);//We can access employees array since its of type protected
    }
  }
  console.log(Department.year,Department.staticFunction);//static method that cannot be accessed on class instance,it's accessed on class itself.
 
  const accounting = new AccountingDepartment('d1', []);
  accounting.addEmployee('Max');//will not be added
  accounting.addEmployee('Manu');//will be added
  accounting.addEmployee('John');//will be added
  accounting.printEmployees();//['Manu', 'John']
  accounting.addReport("Report 1");//Add new Report
  console.log(accounting.LastReport);//Report 1
  accounting.LastReport="Report 2";
  console.log(accounting.LastReport);//Report 2
  
  