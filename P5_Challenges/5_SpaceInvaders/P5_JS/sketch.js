var ship;
var flower;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  flower = new Flower();
}

function draw() {
  background(51);
  ship.show();
  flower.show();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
