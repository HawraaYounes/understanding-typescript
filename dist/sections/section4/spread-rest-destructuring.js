"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const hobbies = ['Sports', 'Swiming'];
const activities = ['Hiking'];
activities.push(...hobbies);
console.log(activities);
function getAverage(...args) {
    const avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
}
console.log(`Average of the given numbers is: ${getAverage(10, 20, 30, 40, 50)}`);
const [x, , y, ...remainingValues] = [10, 20, 30, 40, 50];
console.log(x);
console.log(y);
console.log(remainingValues);
const _a = { aa: 10, b: 20, c: 30, d: 40 }, { aa, b } = _a, restof = __rest(_a, ["aa", "b"]);
console.log(aa);
console.log(b);
console.log(restof);
let obj = {
    firstName: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
};
let { firstName } = obj;
console.log(firstName);
let { add: { country: abcd } } = obj;
console.log(abcd);
let { add: { state: { code: cd } } } = obj;
console.log(cd);
let { add: { state: { article: { topic: ef } } } } = obj;
console.log(ef);
//# sourceMappingURL=spread-rest-destructuring.js.map