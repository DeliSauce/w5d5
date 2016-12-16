// function curriedSum(numArgs) {
//   let numbers = [];
//   function _curriedSum(num){
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return sum(numbers);
//     } else {
//       return _curriedSum;
//     }
//   }
//   return _curriedSum;
// }


function sum(arr) {
  let total = 0;
  arr.forEach(el => {total += el;});
  return total;
}

// const curry = curriedSum(3);
// console.log(curry(2));
// console.log(curry(5));
// console.log(curry(3));


// console.log(sum([1,2,3,4]));


Function.prototype.curry = function(numArgs) {
  let args = [];
  let func = this;
  function _curriedSum(num){
    args.push(num);
    if (args.length === numArgs) {
      return func(...args);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
sumThree.curry(3)(4)(20)(6); // == 30
