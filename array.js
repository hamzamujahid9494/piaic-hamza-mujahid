"use strict";
var studentRollNo = [1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6,];
console.log(studentRollNo[3]);
console.log(studentRollNo);
//operation
var sum = studentRollNo[2] + studentRollNo[3];
console.log(sum);
//changing
studentRollNo[2] = 12;
console.log(studentRollNo);
//limit
//studentRollNo=new Array(6)
console.log(studentRollNo);
//double
console.log(studentRollNo[1], studentRollNo[4]);
//function
var studentName = ["ali", "aliw", "ahmad"];
//function printNewItemsInArray(studentName:string) 
//if{studentName:void[studentName.length]=studentName}
//printNewItemsInArray('zeeshan')
console.log(studentName);
//push,pull
let studio = ["saad", "ali", "wanor"];
//studio.push("afzal")
studio.pop(); //1 delete
console.log(studio);
studio.shift();
studio.unshift("umar");
console.log(studio);
//splice it has limit (2,4,umair)
//first is push, second is pop 4 ka delete ,last wala add
studio.splice(3, 0, "umair");
studio.splice(1, 1, "haider");
console.log(studio);
//for loop, it use to bulid logic and iterate the function
for (let i = 0; i < 50; i++) {
    console.log("1");
} //while is use to print and write the function
//while ( let index<=3) {console.log("1")
console.log("2"),
    //let index=index+1
    //}
    //function genertetable(params:type) {
    //}
    //let start:number=1
    //while(start<=10)
    //{ const result=2*start;
    //console.log("2*"+start,"= " +result )}
    //
    function convertday(day) {
        if (day % 7 == 0) {
            console.log(`${day}`);
        }
    };
//convertday(17)    
let num = 1;
while (num <= 10) {
    const result = num * 6;
    console.log(`6*${num}=${result}`);
}
