let numbers: number[] = [1, 2, 3, 4, 5];
let numbderdouble: number[] = numbers
  .map((num: number) => num ** 2)
  .filter((num: number) => num % 2 === 0);
console.log(numbderdouble);
