//Video 95: Creating a Generic Function
    function displayData<T>(a:T){ //generic function
      return a;
    }
    console.log(displayData<string>("Hello World!")) //Hello World!
    console.log(displayData<number>(12345)) //12345
