"use strict";
//Video 49: "let" & "const"
//let: block-scoped , its value can be changed, & cannot be redeclared.
let num1 = 1;
num1 = 5; //OK
function letDeclaration() {
    let num2 = 2;
    if (num2 > num1) {
        let num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        let num4 = 4;
        num1++;
    }
    console.log(num1); //OK 
    console.log(num2); //OK 
    //console.log(num3); //Compiler Error: Cannot find name 'num3'
    //console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letDeclaration();
//const: block-scoped & its value cannot be changed, & can be redeclared.
const num = 100;
//num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant
//Video 50: Arrow Functions
//test(); //Error: 'test' used before its declaration. (Cannot be hoisted)
const test = (msg) => {
    return `hello ${msg}`;
};
//Video 51: Default Function Parameters
const defaultParams = (a = 1, b = 'Hello', c = 'World!') => {
    console.log(`${a}  ${b}  ${c}`);
};
defaultParams(2, 'Hawraa', 'Younes'); //2 Hawraa Younes
//defaultParams('Hi');  /** Error, since it will assign 'Hi' (string) to parameter "a" of type (number), but here I
/*want to assign 'Hi to "b" (not "a").To solve this, we can pass the value of "a" as "undefined" **/
defaultParams(undefined, 'Hi'); //1 Hi World!
//Video 52: The Spread Operator(...)
const hobbies = ['Sports', 'Swiming'];
const activities = ['Hiking'];
//activities.push(hobbies); //Error: Can't pass array to push, only strings are allowed;
activities.push(...hobbies); //Correct, pushing list of strings using spread operator(...)
console.log(activities); //['Hiking', 'Sports', 'Swiming']
//Video 53: Rest Parameters
function getAverage(...args) {
    const avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
}
console.log(`Average of the given numbers is: ${getAverage(10, 20, 30, 40, 50)}`); //Average of the given numbers is: 30
