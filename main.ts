// const ispalindrome = (palin: string): boolean => {
//   let myplain = palin.split("").reverse().join("");
//   return myplain === palin;
// };
// console.log(ispalindrome("12321"));
const greet = (name: string, id?: number): string => {
  if (id) {
    return `wellcom ${name} and id ${id}`;
  }
  return `wellcom ${name}`;
};
console.log(greet("kailash", 12));
