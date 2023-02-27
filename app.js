"use strict";
exports.__esModule = true;
//Video 16: Objects Types
var car1 = {
    name: "Toyota",
    mileage: 300
};
var car2 = {
    name: ""
};
//Video 18: Arrays
var names = ["John"]; //readonly keyword prevent arrays from being changed.
// names.push("Jack");  //Error Property 'push' does not exist on type 'readonly string[]'.
var activities = []; // 'any' type can be used for mixed arrays
//Video 19: Tuples
var unsafeTuple; //define tuple with fixed length=3
unsafeTuple = [200, false, 'Hello']; //initialize correctly
unsafeTuple.push('World'); //We can push new elements to our tuple, but this no type safety in our tuple for indexes 3+
var safeTuple; //A good practice is to make the tuple readonly to prevent it from being modified.
safeTuple = [200, false, 'Hello']; //initialize correctly
// safeTuple.push('World') //Error
