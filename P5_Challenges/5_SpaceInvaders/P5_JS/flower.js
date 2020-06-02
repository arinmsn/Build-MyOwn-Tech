function Flower() {
  this.x = width / 2;
  this.y = 50;

  this.show = function () {
    fill(255, 0, 200);
    translate(80, 100);
    noStroke();
    for (let i = 0; i < 10; i++) {
      ellipse(0, 20, 10, 30);
      rotate(PI / 4);
    }
  };
}
