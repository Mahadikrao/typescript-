"use strict";
let numbers = [1, 2, 3, 4, 5];
let numbderdouble = numbers
    .map((num) => num ** 2)
    .filter((num) => num % 2 === 0);
console.log(numbderdouble);
