function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;

  this.show = function () {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.hits = function (flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    // flower and drop intersect if distance (d) is less
    // than the flower's and drop's radius.
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    this.y = this.y - 3;
  };
}
