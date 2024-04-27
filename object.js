"use strict";
// type Person = {
//   name: string;
//   age: number;
//   city: { area: number; location: string };
// };
const student1 = {
    name: "kailash",
    age: 29,
    greet: (country) => `my ${student1.name} and ${student1.age} and from ${country}`,
};
console.log(student1.greet("india"));
