//Video 16: Objects Types
    const car1:{ name:string; mileage:number}={//here the properties 'name & mileage' are both required
        name:"Toyota",
        mileage: 300
    };
    const car2:{ name:string; mileage?:number}={//here the property 'mileage' is not required (optional)
        name:"",
    };

//Video 18: Arrays
    const names: readonly string[] = ["John"];//readonly keyword prevent arrays from being changed.
    // names.push("Jack");  //Error Property 'push' does not exist on type 'readonly string[]'.
    let activities:any[]=[];// 'any' type can be used for mixed arrays

//Video 19: Tuples
    let unsafeTuple:[number,boolean,string]; //define tuple with fixed length=3
    unsafeTuple=[200,false,'Hello']; //initialize correctly
    unsafeTuple.push('World'); //We can push new elements to our tuple, but this no type safety in our tuple for indexes 3+
    let safeTuple: readonly [number,boolean,string]; //A good practice is to make the tuple readonly to prevent it from being modified.
    safeTuple=[200,false,'Hello']; //initialize correctly
    // safeTuple.push('World') //Error