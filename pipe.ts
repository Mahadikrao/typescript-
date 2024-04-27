// const userInput = (value: string | number): string | number => {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else {
//     throw new Error("invalid input data");
//   }
// };
// console.log(userInput("aaaa"));
type person = {
  name: string;
  age: number;
};
type employe = {
  id: number;
  work: string;
  name: string;
};

type employeeDetails = person & employe;
const employees: employeeDetails = {
  name: "kailash",
  age: 12,
  id: 122,
  work: "software engineeyer",
};
console.log(employees);
