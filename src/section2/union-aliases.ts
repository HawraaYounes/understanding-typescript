export{}; //Telling TypeScript that our file is a module with its own scope.

//Video 22: Union Types
    function printStatusCode(code: number | string){//code can be of type "number" OR "string"
        console.log(`My status cose is ${code}`);
    }
    printStatusCode(404); //Correct (code is of type number)
    printStatusCode("404"); //Correct (code is of type string)
    //printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)

//Video 23: Literal Types
function printText(s: string, alignment: "left" | "right" ) {//function that accepts only a certain set of values for alignment:
    console.log(`'${s}' has alignment: ${alignment}`);
  }
  printText("Hello world!", "left"); //Correct
  //printText("Hello world!", "Right"); //Error: values are CASE SENSITIVE ()
  //printText("Hello World!", "center"); //Error:Argument of type '"center"' is not assignable to parameter of type "left" | "right".

//Video 24: Type Aliases/ Custom Types
  type id= number | string; //variables of type id can be either number or string.
  type pet= 'Dog' | 'Cat'; //variables of type pet can be either 'Dog' or 'Cat'.
  function combine(ID1: id, ID2: id, petName1: pet, petName2 : pet){
    console.log(`'${petName1}' has ID: ${ID1}`);
    console.log(`'${petName2}' has ID: ${ID2}`);
  }
  combine("#1902",2706,"Dog","Cat");//Correct
  //combine(1859,"A1275","Fish","Dog");//Error: 'Fish' cannot be assigned to petName1 of type 'pet'(only Dog OR Cat is allowed)
  //combine(5602,false,"Cat","Cat");//Error: false(boolean) cannot be assigned to ID2 of type 'id'(only string OR number is allowed)
