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
// names.push("Jack");  //Error