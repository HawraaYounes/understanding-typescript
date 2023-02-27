export{}; //Telling TypeScript that our file is a module with its own scope.
//Video 22: Union Types
    function printStatusCode(code: number | string){//code can be of type "number" OR "string"
        console.log(`My status cose is ${code}`);
    }
    printStatusCode(404); //Correct (code is of type number)
    printStatusCode("404"); //Correct (code is of type string)
    //printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)

//Video 23: Literal Types
function printText(s: string, alignment: "left" | "right" ) {//functions that accept only a certain set of values for alignment:
    console.log(`'${s}' has alignment: ${alignment}`);
  }
  printText("Hello world!", "left"); //Correct
  //printText("Hello world!", "Right"); //Error: values are CASE SENSITIVE ()
  //printText("Hello World!", "center"); //Error:Argument of type '"center"' is not assignable to parameter of type "left" | "right".