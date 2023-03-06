"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car1 = {
    name: "Toyota",
    mileage: 300
};
const car2 = {
    name: "Toyota",
};
const names = ["John"];
let activities = [];
let unsafeTuple;
unsafeTuple = [200, false, 'Hello'];
unsafeTuple.push('World');
let safeTuple;
safeTuple = [200, false, 'Hello'];
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 0] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 1] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 2] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 3] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
})(StatusCodes || (StatusCodes = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["Admin"] = "ADMIN";
    RoleEnum["User"] = "USER";
})(RoleEnum || (RoleEnum = {}));
//# sourceMappingURL=basics.js.map