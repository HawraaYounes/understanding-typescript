export{};//Telling TypeScript that our file is a module with its own scope.

//Video 26: Functions Return types & "void"
    function getTime(): number { // the `: number` here specifies that this function returns a number
        return new Date().getTime();
    }
    function printHello(): void { //The type void can be used to indicate a function doesn't return any value.
        console.log('Hello!');
      }

//Video 27: Functions as Types
      function add(n1:number , n2:number){
        return n1+n2;
      }
      function printName(n:string){
        console.log(n);
      }
       let typedFunction: (n1:number,n2:number)=>number; //function of 2 parameters(numbers) and its return type is also number.
       typedFunction=add; //Correct 
       //typedFunction=printName //Error (since printName has only one string parameter & it is a void function)

//Video 28: Function Types & Callbacks
      function parent(a:number,b:number,callback:(res:number)=>void){ //'callback' function passed as parameter
        let res=a+b;
        callback(res);
        return res;
      }
      function callback(a:number){
        console.log(a);
      }
      parent(20,5,callback);
 
//Video 29: The "unknown" type
      let userInput:unknown;
      let userName:string;
      userInput='John'; //Correct 
      //userName=userInput; //Error: 'unknown' is not assignable to type 'string'.
      if(typeof userInput=== 'string' && userInput!=null){ //Check the type of userInput before assigning it to another variable.
        userName=userInput; //Correct
      }
