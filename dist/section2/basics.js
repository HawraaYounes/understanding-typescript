"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Video 16: Objects Types
const car1 = {
    name: "Toyota",
    mileage: 300
};
const car2 = {
    name: "Toyota",
};
//Video 18: Arrays
const names = ["John"]; //readonly keyword prevent arrays from being changed.
// names.push("Jack");  //Error Property 'push' does not exist on type 'readonly string[]'.
let activities = []; // 'any' type can be used for mixed arrays
//Video 19: Tuples
let unsafeTuple; //define tuple with fixed length=3
unsafeTuple = [200, false, 'Hello']; //initialize correctly
unsafeTuple.push('World'); //We can push new elements to our tuple, but this no type safety in our tuple for indexes 3+
let safeTuple; //A good practice is to make the tuple readonly to prevent it from being modified.
safeTuple = [200, false, 'Hello']; //initialize correctly
// safeTuple.push('World') //Error
//Video 20: Enums
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 0] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 1] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 2] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 3] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {})); //Numeric Enums(default),initialize 1st value to 0 and have auto increment from that
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {})); //Numeric Enums(initialized),set the 1st enum to specific value and have auto increment from that
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
})(StatusCodes || (StatusCodes = {})); //Numeric Enums(fully initialized),assign unique value for each enum
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["Admin"] = "ADMIN";
    RoleEnum["User"] = "USER";
})(RoleEnum || (RoleEnum = {})); //String Enums,have more readability
