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