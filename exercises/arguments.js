function sum() {
  let summer = 0;
  let args = Array.prototype.slice.call(arguments);
  args.forEach((el) => {summer += el;});
  return summer;
}


// function sum(...args) {
//   let summer = 0;
//   args.forEach((el) => {summer += el;});
//   return summer;
// }


// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//
//   return total;
// }

console.log(sum(1,2,3,4));
console.log(sum(1, 2, 3, 4, 5));
