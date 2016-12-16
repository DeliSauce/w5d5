Function.prototype.myBind = function () {
  // let args = Array.prototype.slice.call(arguments);
  if (arguments.length == 1) {
    let context = arguments[0];

    return (el1, el2) => this.call(context, el1, el2);
  } else if (arguments.length == 2) {
    let context = arguments[0];
    let arg1 = arguments[1];

    return (el) => this.call(context, arg1, el);
  } else if (arguments.length == 3) {
    let context = arguments[0];
    let arg1 = arguments[1];
    let arg2 = arguments[2];

    return () => this.call(context, arg1, arg2);
  }
};

// Function.prototype.myBind = function (...args) {
//   // let args = Array.prototype.slice.call(arguments);
//   let context = args[0];
//   let otherArgs = args.slice(1);
//
//   return (...els) => this.call(context, ...otherArgs);
//
// };

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned"); // Markov says meow to Ned!
markov.says.myBind(breakfast, "meow", "Kush")(); // Breakfast says meow to Kush!
markov.says.myBind(breakfast)("meow", "a tree"); // Breakfast says meow to a tree!
markov.says.myBind(breakfast, "meow")("Markov"); // Breakfast says meow to Markov!

// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me"); // Breakfast says meow to me!


// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// };
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
