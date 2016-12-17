
// const canvasEl = document.getElementsByTagName("canvas")[0];
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
// new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);



const MovingObject = function(attributes){
  this.pos = attributes.pos;
  this.vel = attributes.vel;
  this.radius = attributes.radius;
  this.color = attributes.color;
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

MovingObject.prototype.draw = function(ctx) {
  // ctx.fillStyle = this.color;
  // ctx.beginPath();

  // ctx.arc(
  //   this.pos[0],
  //   this.pos[1],
  //   this.radius,
  //   0,
  //   2 * Math.PI
  // );
  // ctx.fill();

  ctx.fillStyle = "#00FF00";
  ctx.beginPath();

  ctx.arc(
    40,
    40,
    40,
    0,
    2 * Math.PI
  );

  ctx.fill();

};

const attrib = { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"};
const temp = new MovingObject(attrib);
temp.draw();
console.log(temp);

// temp.render;
module.exports = MovingObject;
