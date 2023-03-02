//Video 95: Creating a Generic Function
    function displayData<T>(a:T){ //generic function
      return a;
    }
    console.log(displayData<string>("Hello World!")) //Hello World!
    console.log(displayData<number>(12345)) //12345

//Video 96: Working with Constraints
    interface HasLength{
      length:number
    }
    function getLength<T extends HasLength>(a:T){ //extends HasLength allow us to use .length property
      return a.length; 
    }
    console.log(getLength([2,3,7,1,9])); //5
    console.log(getLength("GUESS MY LENGTH!")); //16
    //console.log(getLength(1235)); //Error: numbers don't have '.length' property