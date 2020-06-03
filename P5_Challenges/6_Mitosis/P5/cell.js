function Cell() {
  this.pos = createVector(random(width), random(height));
  // radius
  this.r = 20;

  this.move = function () {};

  this.show = function () {
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
