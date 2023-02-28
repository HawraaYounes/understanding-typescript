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
