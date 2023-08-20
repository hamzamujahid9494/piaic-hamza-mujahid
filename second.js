"use strict";
function printconsole() { console.log("hamza"); }
printconsole();
console.log(12);
console.log(12);
console.log("hamza");
printconsole();
//2
function hamza() {
    var Numbr1 = 12;
    var Number2 = 12;
    var result = Numbr1 + Number2;
    console.log(result);
}
hamza();
function two(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
two(3, 5);
//ctof
function CToF(temp) {
    var tempF = temp * (9 / 5) + 32;
    console.log(tempF);
}
CToF(32);
//3
var sunarrow = (num1, num2) => {
    var result = num1 + num2;
    console.log(result);
};
sunarrow(12, 23);
