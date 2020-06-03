function Cell() {
  this.pos = createVector(random(width), random(height));
  // radius
  this.r = 80;
  // random(x, y) is range of colors for red & blue
  this.c = color(random(100, 255), 0, random(100, 255));

  this.move = function () {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  };

  this.show = function () {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
