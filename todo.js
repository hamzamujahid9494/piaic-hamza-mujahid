"use strict";
let todo = ["namaz", "bathing", "eating", "going", "biking", "dailywork", "sleepinng"];
if (todo.length % 2 == 0) {
    todo.splice((todo.length - 1) / 2, 2);
    console.log(todo);
}
else {
    todo.splice((todo.length - 1) / 2, 1);
    console.log(todo);
}
