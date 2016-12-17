const Util = require("./util")
const MovingObject = require("./moving_object")

const DEFAULTS = {
  COLOR: "#FF004C",
  RADIUS: 10
}

const Asteroid = function {

};


// Return a randomly oriented vector with the given length.
randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
},
// Scale the length of a vector by the given amount.
scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}
