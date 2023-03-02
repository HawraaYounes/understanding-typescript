//Video 95: Creating a Generic Function
    function displayData<T>(a:T){ //generic function
      return a;
    }
    console.log(displayData<string>("Hello World!")) //Hello World!
    console.log(displayData<number>(12345)) //12345

//Video 96: Working with Constraints
    interface HasLength{
      length:number;
    }
    function getLength<T extends HasLength>(a:T){ //extends HasLength allow us to use .length property
      return a.length; 
    }
    console.log(getLength([2,3,7,1,9])); //5
    console.log(getLength("GUESS MY LENGTH!")); //16
    //console.log(getLength(1235)); //Error: numbers don't have '.length' property

//Video 98: The "keyof" Constraint
    function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
      return obj[key];
    }
    
    let ob = { a: 1, b: 2, c: 3, d: 4 };
    
    console.log(getProperty(ob, "a"));//1
    //getProperty(ob, "m"); //Error:Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'

