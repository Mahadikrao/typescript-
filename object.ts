// type Person = {
//   name: string;
//   age: number;
//   city: { area: number; location: string };
// };

// let person: Person = {
//   name: "kailash",
//   age: 10,
//   city: {
//     area: 492001,
//     location: "raipur",
//   },
// };

// person.city.area = 2000;
// console.log(person);
type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};

const student1: Student = {
  name: "kailash",
  age: 29,
  greet: (country): string =>
    `my ${student1.name} and ${student1.age} and from ${country}`,
};
console.log(student1.greet("india"));
