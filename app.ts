export{};
//Video 22: Union Types
    function printStatusCode(code: number | string){//code can be of type "number" OR "string"
        console.log(`My status cose is ${code}`);
    }
    printStatusCode(404); //Correct (code is of type number)
    printStatusCode("404"); //Correct (code is of type string)
    //printStatusCode(true); //Error (code is of type boolean, only number or string is allowed)
