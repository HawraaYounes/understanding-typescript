export{};//Telling TypeScript that our file is a module with its own scope.

//Video 26: Functions Return types & "void"
    function getTime(): number { // the `: number` here specifies that this function returns a number
        return new Date().getTime();
    }
    function printHello(): void { //The type void can be used to indicate a function doesn't return any value.
        console.log('Hello!');
      }
